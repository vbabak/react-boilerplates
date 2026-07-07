import { useCallback, useRef, useSyncExternalStore } from "react";
import type { Signal } from "@preact/signals-core";

export function useSignal<T>(signal: Signal<T>): T {
    const subscribe = useCallback(
        (onStoreChange: () => void) => signal.subscribe(() => onStoreChange()),
        [signal],
    );

    const getSnapshot = useCallback(() => signal.value, [signal]);
    return useSyncExternalStore(subscribe, getSnapshot);
}

export function useSignals<const T extends readonly Signal[]>(
    signals: T,
): { [K in keyof T]: T[K] extends Signal<infer V> ? V : never } {
    type Values = { [K in keyof T]: T[K] extends Signal<infer V> ? V : never };

    // Cache the snapshot array so getSnapshot returns a stable reference
    // until one of the signal values actually changes. Without this,
    // useSyncExternalStore would see a new array every render and loop.
    const cache = useRef<Values | null>(null);

    const subscribe = useCallback(
        (onStoreChange: () => void) => {
            const unsubscribes = signals.map((signal) =>
                signal.subscribe(() => onStoreChange()),
            );
            return () => unsubscribes.forEach((unsubscribe) => unsubscribe());
        },
        [signals],
    );

    const getSnapshot = useCallback(() => {
        const next = signals.map((signal) => signal.value) as unknown as Values;
        const prev = cache.current;
        if (
            prev &&
            prev.length === next.length &&
            prev.every((v, i) => Object.is(v, next[i]))
        ) {
            return prev;
        }
        cache.current = next;
        return next;
    }, [signals]);

    return useSyncExternalStore(subscribe, getSnapshot);
}

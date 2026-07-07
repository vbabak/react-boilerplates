import { useState } from "react";
import { useSignal } from "../hooks/signals";
import { UserController } from "./user-controller";
import { UserService } from "./user-service";

export function App() {
    const [controller] = useState(() => new UserController(new UserService()));
    const userData = useSignal(controller.userData);
    // const [userData] = useSignals([controller.userData]);
    return <h1>Hello, {userData?.name}</h1>;
}

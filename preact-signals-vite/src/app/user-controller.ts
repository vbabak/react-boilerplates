import { signal, type Signal } from "@preact/signals-core";
import type { UserService } from "./user-service";

export class UserController {
    userData: Signal<{ name: string } | null> = signal(null);

    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
        this.reloadUserData();
    }

    reloadUserData() {
        this.userService
            .fetchUserData()
            .then((data) => {
                this.userData.value = data;
            })
            .catch((error) => {
                console.error("Failed to fetch user data:", error);
            });
    }
}

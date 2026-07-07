export class UserService {
    async fetchUserData() {
        // Simulate an API call
        const data = await new Promise<{ name: string }>((resolve) =>
            setTimeout(() => resolve({ name: "John Doe" }), 1000),
        );
        return data;
    }
}

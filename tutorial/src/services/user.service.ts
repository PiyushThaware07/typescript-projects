export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    address: Address;
}

export class UserService {
    private static API_URL = "https://jsonplaceholder.typicode.com/users";

    public static fetchUsers = async (): Promise<User[]> => {
        const response = await fetch(this.API_URL);
        return response.json();
    };
}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = {
    get: async (path: string) => {
        const response = await fetch(`${BASE_URL}${path}`);
        return response.json();
    },
    post: async (path: string, payload: any) => {
        const response = await fetch(`${BASE_URL}${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        return response.json();
    }
}

export default api;
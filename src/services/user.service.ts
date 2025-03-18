export type Geo = {
    lat: string;
    lng: string;
};

export type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
};

export type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
};

export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type Album = {
    userId: number;
    id: number;
    body: string;
}

export async function getUsers(): Promise<User[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
        throw new Error('Error al obtener los usuarios');
    }

    const data: User[] = (await res.json()) as User[];

    return data.map((user) => {
        const { lat, lng } = user.address.geo;
        return {
            ...user,
            address: {
                ...user.address,
                coords: `${lat}, ${lng}`,
            },
        };
    });
}

export async function getUserById(id: string): Promise<User> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
        throw new Error(`Error fetching user with id ${id}`);
    }
    return await res.json() as Promise<User>;
}

export async function getPostsByUserId(id: string): Promise<Post[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    if (!res.ok) {
        throw new Error(`Error fetching user with id ${id}`);
    }
    return await res.json() as Promise<Post[]>;
}

export async function getAlbumsByUserId(id: string): Promise<Album[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
    if (!res.ok) {
        throw new Error(`Error fetching user with id ${id}`);
    }
    return await res.json() as Promise<Album[]>;
}

export async function getTodosByUserId(id: string): Promise<Todo[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
    if (!res.ok) {
        throw new Error(`Error fetching user with id ${id}`);
    }
    return await res.json() as Promise<Todo[]>;
}
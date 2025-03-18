export type Album = {
    userId: number;
    id: number;
    title: string;
};


export async function getAlbums(): Promise<Album[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!res.ok) {
        throw new Error('Error fetching posts');
    }
    const data = await res.json();
    return data as Album[];
}
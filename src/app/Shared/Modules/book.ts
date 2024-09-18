export interface Book {
    id: number; // Required Property
    title: string; // Required Property
    author: string; // Required Property
    publicationYear: number; // Required Property
    genre: string; // Required Property
    rating?: number; // Optional Property
}

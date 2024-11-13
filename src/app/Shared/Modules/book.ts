export interface Book {
    id: number; // Required Property
    title: string; // Required Property
    author: string; // Required Property
    publicationYear: string; // Required Property
    genre: string; // Required Property
    price: number; // New Property
    quote: string; // New Property
    rating?: number; // Optional Property
    showRating?: boolean; // Optional Property to track rating visibility
}


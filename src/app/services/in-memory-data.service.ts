import {InMemoryDbService} from "angular-in-memory-web-api";
import { Book } from "../Shared/Modules/book";

export class InMemoryDataService implements InMemoryDbService {
    createDb(): {books: Book[]} {
        const books: Book[] = [
            { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', publicationYear: '1960-07-11', genre: 'Southern Gothic', price: 25, quote: 'Best way to clear the air is to have it all out in the open!'},
            { id: 2, title: 'Harry Potter and the Prisoner of Azkaban', author: 'J.K. Rowling', publicationYear: '1999-07-08', genre: 'Fantasy', price: 30, quote: 'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light!',rating: 4.7 },
            { id: 3, title: 'Romeo and Juliet', author: 'William Shakespeare', publicationYear: '1597-10-27', genre: 'Tragedy', price: 35, quote: 'Parting is such sweet sorrow that I shall say goodnight till it be morrow!'},
            { id: 4, title: 'Marvel Comics', author: 'Stan Lee', publicationYear: '1939-08-31', genre: 'Superhero, Fantasy, Action, Adventure', price: 40, quote: 'I do not have inspiration. I only have ideas. Ideas and deadlines!', rating: 5.0 },
        ];

        return { books };
    }
}
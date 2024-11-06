import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from '../Shared/Modules/book';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {books: Book[]} {

    const books: Book[] = [
      { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', publicationYear: 1960, genre: 'Southern Gothic', image: "images/mockingbird.jpg"},
      { id: 2, title: 'Harry Potter and the Prisoner of Azkaban', author: 'J.K. Rowling', publicationYear: 1999, genre: 'Fantasy', rating: 4.7, image: "images/harrypotter.jpg"},
      { id: 3, title: 'Romeo and Juliet', author: 'William Shakespeare', publicationYear: 1597, genre: 'Tragedy', image: "images/romeojuliet.jpg"},
      { id: 4, title: 'Marvel Comics', author: 'Stan Lee', publicationYear: 1939, genre: 'Superhero, Fantasy, Action, Adventure', rating: 5.0, image: "images/marvelcomic.jpg"},
    ];
    return { books };
  }
}

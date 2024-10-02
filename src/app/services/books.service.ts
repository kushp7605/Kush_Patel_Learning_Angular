import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../Shared/Modules/book';
import { BOOKS } from '../data/mock-books';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  // Initialize the books array directly with mock data
  private books: Book[] = BOOKS;
  constructor() {}
  
  // Method to return an Observable of the BOOKS array
  getBooks(): Observable<Book[]> {
    return of(BOOKS); // Return the BOOKS array wrapped in an observable
  }

  // Method to get a specific book by its ID
  getBookById(bookId: number) : Observable<Book | undefined> {
    const book = this.books.find(book => book.id === bookId); // Find the book with the given ID
    return of(book); // Return the found book wrapped in an observable
  }

  // Method to add a new book to the array
  addBook(newBook: Book) : Observable<Book[]> {
    this.books.push(newBook); // Add the new book to the array
    return of(this.books); // Return the updated books array wrapped in an observable
  }

  // Method to update an existing book by its ID
  updateBook(updatedBook: Book) : Observable<Book[]> {
    // Find the index of the book to update
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook; // Update the book at the found index
    }
    return of(this.books); // Return the updated books array wrapped in an observable
  }

  // Method to delete a book by its ID
  deleteBook(bookId: number) : Observable<Book[]> {
    // Filter out the book with the given ID from the books array
    this.books = this.books.filter(book => book.id !== bookId);
    return of(this.books); // Return the updated books array wrapped in an observable
  } 
}

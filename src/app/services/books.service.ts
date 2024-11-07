import { Injectable } from '@angular/core';
import { Book } from '../Shared/Modules/book';
import { BOOKS } from '../data/mock-books';
import {catchError, Observable, of, throwError} from "rxjs";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class BooksService {
  private apiUrl = 'api/books';
  // Initialize the books array directly with mock data
  private books: Book[] = BOOKS;
  constructor(private http: HttpClient) {}
  
  // Method to return an Observable of the BOOKS array
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // Method to get a specific book by its ID
  getBookById(bookId: number) : Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${bookId}`).pipe(catchError(this.handleError));
  }

  // Method to add a new book to the array
  addBook(newBook: Book) : Observable<Book> {
    return this.http.post<Book>(this.apiUrl, newBook).pipe(catchError(this.handleError));
  }

  // Method to update an existing book by its ID
  updateBook(updatedBook: Book) : Observable<Book | undefined> {
    const url = `${this.apiUrl}/${updatedBook.id}`;
    return this.http.put<Book>(url, updatedBook).pipe(catchError(this.handleError));
  }

  // Method to delete a book by its ID
  deleteBook(bookId: number) : Observable<{}> {
    const url = `${this.apiUrl}/${bookId}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }
  
  // New method to generate a new unique ID
  generateNewId() : number {
    return this.books.length > 0 ? Math.max(...this.books.map(book => book.id)) + 1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}

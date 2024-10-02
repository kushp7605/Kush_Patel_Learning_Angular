import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../Shared/Modules/book';
import { BOOKS } from '../data/mock-books';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  constructor() {}

  // Method to return an Observable of the BOOKS array
  getBooks(): Observable<Book[]> {
    return of(BOOKS); // Wrap the BOOKS array in an Observable
  }
}

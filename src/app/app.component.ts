import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Book } from './Shared/Modules/book';
import { BooksListComponent } from "./books-list/books-list.component";
import { BooksListItemComponent } from './books-list-item/books-list-item.component';
import { BooksService } from './services/books.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BooksListComponent, BooksListItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Books List App';
  
  // Initialize an empty array to hold Book objects
  books: Book[] = [];
  selectedBook?: Book;

  constructor(private booksService: BooksService) {} // Dependency injection using constructor method

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void {
    // Call the getBooks method from BooksService and subscribe to the Observable
    this.booksService.getBooks().subscribe({
      next: (data: Book[]) => this.books = data,
      error: err => console.error("Error Fetching Books", err),
      complete: () => console.log("Books Fetch Complete!")
    });

    // Fetch a single book by ID to display at the top
    this.booksService.getBookById(3).subscribe({
      next: (book: Book | undefined) => this.selectedBook = book,
      error: err => console.error("Error Fetching Book by ID", err),
      complete: () => console.log("Single Book Fetch Complete!")
    });
  }
  
  // Method to toggle the ratings display
  toggleRating(book: Book): void {
    book.showRating = !book.showRating;
  } 
}

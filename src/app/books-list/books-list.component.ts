import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../Shared/Modules/book';
import { BooksListItemComponent } from '../books-list-item/books-list-item.component';
import { BooksService } from '../services/books.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, BooksListItemComponent, RouterModule],
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})

// Define the BooksListComponent class, implementing OnInit lifecycle hook
export class BooksListComponent implements OnInit {
  // Initialize an empty array to hold Book objects
  books: Book[] = [];
  error: string | null = null;


  constructor(private booksService: BooksService, private router: Router, private route: ActivatedRoute) {} // Dependency injection using constructor method

  // Lifecycle hook that is called after the component is initialized
  ngOnInit() {
    // Call the getBooks method from BooksService and subscribe to the Observable
    this.booksService.getBooks().subscribe({
      next: (data: Book[]) => {
        this.books = data;
        this.error = null; // Set error to null if data fetch is successful
      },
      error: err => {
        this.error = 'Error fetching books'; // Set an error message
        console.error("Error fetching books", err);
      },
      complete: () => console.log("Books data fetch complete successfully!")
    });
  }
  

  // Navigate to the edit form with the selected book ID
  editBook(bookId: number | undefined): void {
    this.router.navigate(['/modify-list-item', bookId]);
  }

  deleteBook(bookId: number ): void {
    this.booksService.deleteBook(bookId);
    this.books = this.books.filter(book => book.id !== bookId);
  }

  selectedBook?: Book;
  selectBook(book: Book): void {
    this.selectedBook = book;
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../Shared/Modules/book';
import { BooksListItemComponent } from '../books-list-item/books-list-item.component';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, BooksListItemComponent],
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})

// Define the BooksListComponent class, implementing OnInit lifecycle hook
export class BooksListComponent implements OnInit {
  // Initialize an empty array to hold Book objects
  books: Book[] = [];

  constructor(private booksService: BooksService) {} // Dependency injection using constructor method

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void {
    // Call the getBooks method from BooksService and subscribe to the Observable
    this.booksService.getBooks().subscribe({
      next: (data: Book[]) => this.books = data,
      error:err => console.error("Error Fetching", err),
      complete:() => console.log("Fetch Complete!")
    });
  }
}

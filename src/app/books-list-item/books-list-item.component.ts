import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe, UpperCasePipe} from '@angular/common'; 
import { Book } from '../Shared/Modules/book';
import { ActivatedRoute, Router} from '@angular/router';
import { BooksService } from '../services/books.service';
import { QuoteByAuthorPipe } from '../pipes/quote-by-author.pipe';
import { BookRatingPipe } from '../pipes/book-rating.pipe';


@Component({
  selector: 'app-books-list-item',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe, UpperCasePipe, QuoteByAuthorPipe, BookRatingPipe],
  templateUrl: './books-list-item.component.html',
  styleUrl: './books-list-item.component.css'
})

export class BooksListItemComponent {
  @Input() book?: Book; // Accepts a Book object
  @Input() showRating?: boolean; // Accepts showRating for visibility of ratings available for books or not

  books: Book[] = [];
  currentIndex: number = 0;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private booksService: BooksService, private router: Router) {}

  ngOnInit(): void {
    // Fetch books using BooksService
    this.booksService.getBooks().subscribe({
      next: (books: Book[]) => {
        this.books = books;
        this.error = null; // Clear any previous errors

        // Update view based on route paramMap
        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.books.findIndex(book => book.id === id);
            this.book = this.books[this.currentIndex];
          }
        });
      },
      error: (err) => {
        this.error = 'Error fetching books';
        console.error('Error fetching books:', err);
      }
    });
  }

  // Method to toggle the showRating property
  toggleRating(): void {
    if (this.book) {
      this.book.showRating = !this.book.showRating;
    }
  }
}

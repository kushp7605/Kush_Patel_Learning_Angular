import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Book } from '../Shared/Modules/book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './books-list-item.component.html',
  styleUrl: './books-list-item.component.css'
})

export class BooksListItemComponent {
  @Input() book?: Book; // Accepts a Book object
  @Input() showRating?: boolean; // Accepts showRating for visibility of ratings available for books or not

  // Method to toggle the showRating property
  toggleRating(): void {
    if (this.book) {
      this.book.showRating = !this.book.showRating;
    }
  }
}

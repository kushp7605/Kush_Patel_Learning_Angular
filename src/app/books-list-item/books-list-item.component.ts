import { Component, Input } from '@angular/core';
import { Book } from '../Shared/Modules/book';

@Component({
  selector: 'app-books-list-item',
  standalone: true,
  imports: [],
  templateUrl: './books-list-item.component.html',
  styleUrl: './books-list-item.component.css'
})

export class BooksListItemComponent {
  @Input() book!: Book; // Ensure book is defined
}

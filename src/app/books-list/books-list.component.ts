import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../Shared/Modules/book';
import { BooksListItemComponent } from '../books-list-item/books-list-item.component';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, BooksListItemComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})

export class BooksListComponent {
  
}

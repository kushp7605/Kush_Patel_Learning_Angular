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
  books: Book[] = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', publicationYear: 1960, genre: 'Southern Gothic', },
    { id: 2, title: 'Harry Potter and the Prisoner of Azkaban', author: 'J.K. Rowling', publicationYear: 1999, genre: 'Fantasy', rating: 4.7 },
    { id: 3, title: 'Romeo and Juliet', author: 'William Shakespeare', publicationYear: 1597, genre: 'Tragedy', },
    { id: 4, title: 'Marvel Comics', author: 'Stan Lee', publicationYear: 1939, genre: 'Superhero, Fantasy, Action, Adventure', rating: 5.0 },
  ];
}

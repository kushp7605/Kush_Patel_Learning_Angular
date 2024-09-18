import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Book } from './Shared/Modules/book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Book List';
  books: Book[] = [
    { id: 1, title: '1984', author: 'George Orwell', publicationYear: 1949, genre: 'Dystopian, Political Fiction', rating: 4.5 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publicationYear: 1960, genre: 'Southern Gothic', },
    { id: 3, title: 'Harry Potter and the Prisoner of Azkaban', author: 'J.K. Rowling', publicationYear: 1999, genre: 'Fantasy', rating: 4.7 },
    { id: 4, title: 'Romeo and Juliet', author: 'William Shakespeare', publicationYear: 1597, genre: 'Tragedy', },
    { id: 5, title: 'Marvel Comics', author: 'Stan Lee', publicationYear: 1939, genre: 'Superhero, Fantasy, Action, Adventure', rating: 5.0 },
    { id: 6, title: 'Brave New World', author: 'Aldous Huxley', publicationYear: 1932, genre: 'Science Fiction, Dystopian', rating: 4.4},
    { id: 7, title: 'The Stand', author: 'Stephen King', publicationYear: 1978, genre: 'Post-Apocalyptic, Dark fantasy' }
  ];
}
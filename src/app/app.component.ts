import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Book } from './Shared/Modules/book';
import { BooksListComponent } from "./books-list/books-list.component";
import { BooksListItemComponent } from './books-list-item/books-list-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BooksListComponent, BooksListItemComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Books List App';
}

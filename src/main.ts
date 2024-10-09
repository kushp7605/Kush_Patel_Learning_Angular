import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { BooksListComponent } from './app/books-list/books-list.component';
import { BooksListItemComponent } from './app/books-list-item/books-list-item.component';

const routes: Routes = [
  { path: 'books', component: BooksListItemComponent },
  { path: 'books/:id', component: BooksListComponent}
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});


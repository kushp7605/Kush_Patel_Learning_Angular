import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { BooksListComponent } from './app/books-list/books-list.component';
import { BooksListItemComponent } from './app/books-list-item/books-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' }, // Default route
  { path: 'books', component: BooksListComponent },
  { path: 'books/:id', component: BooksListItemComponent },
  { path: 'modify-list-item', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { BooksListComponent } from './app/books-list/books-list.component';
import { BooksListItemComponent } from './app/books-list-item/books-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { InMemoryDataService } from './app/services/in-memory-data.service';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' }, // Default route
  { path: 'books', component: BooksListComponent },
  { path: 'books/:id', component: BooksListItemComponent },
  { path: 'modify-list-item', component: ModifyListItemComponent },
  { path: 'modify-list-item/:id', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }))
  ],
}).catch((err) => console.error(err));

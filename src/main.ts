import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { BooksListComponent } from './app/books-list/books-list.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from './app/services/in-memory-data.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' }, // Default route eagerly loaded
  { path: 'books', component: BooksListComponent },
  { path: 'books/:id', loadComponent: () =>
    import('./app/books-list-item/books-list-item.component').then(m => m.BooksListItemComponent) }, // Lazy Loaded
  { path: 'modify-list-item', loadComponent: () =>
    import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent) },
  { path: 'modify-list-item/:id', component: ModifyListItemComponent },
  { path: '**', loadComponent: () =>
    import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) } // Wildcard route for a 404 page
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })), provideAnimationsAsync()
  ],
}).catch((err) => console.error(err));

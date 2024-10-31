import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooksService } from '../services/books.service';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { Book } from '../Shared/Modules/book';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})

export class ModifyListItemComponent implements OnInit {
  bookForm: FormGroup;
  book: Book | undefined; 

  constructor (
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private booksService: BooksService,
    private router: Router
  ) {
    this.bookForm = this.fb.group ({
      id: ['', Validators.required], // ID is required
      title: ['', Validators.required], // Title is required
      author: ['', Validators.required], // Author is required
      genre: ['', Validators.required], // Genre is required
      publicationYear: [''],
      rating: [''],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.booksService.getBookById(+id).subscribe(book => {
        if (book) {
          this.book = book;

          this.bookForm.patchValue(book);
        }
      });
    }
  }

  onSubmit(): void {
    const book: Book = this.bookForm.value;

    // Check if we are updating an existing book
    if(book.id) {
      this.booksService.updateBook(book);
      this.router.navigate(['/books']);
    } else {
      // For adding a new book, generate a new ID
      const newId = this.booksService.generateNewId(); // This method will create a new ID
      book.id = newId;
      this.booksService.addBook(book);
    }

    this.bookForm.reset();
  }

  // Navigate to the edit form with the selected book ID
  editBook(bookId: number | undefined): void {
    if (bookId !== undefined) {
      this.router.navigate(['/modify-list-item', bookId]);
    }
  }

  navigateToBookList(): void {
    this.router.navigate(['/books']);
  }
}

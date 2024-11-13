import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteByAuthor',
  standalone: true
})
export class QuoteByAuthorPipe implements PipeTransform {
  transform(quote: string | undefined, author: string | undefined): string {
    return `"${quote}" - By ${author}`;
  }
}

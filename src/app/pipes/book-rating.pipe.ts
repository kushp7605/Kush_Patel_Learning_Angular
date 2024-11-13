import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookRating',
  standalone: true
})
export class BookRatingPipe implements PipeTransform {
  transform(rating: number | undefined): string {
    if (rating === undefined) {
      return 'rating-notAvailable';  // For undefined or ratings not available, return class for red color
    } else if (rating === 5.0) {
      return 'high-rating'; // For high ratings, return class for yellow color
    } else {
      return 'low-rating'; // For low ratings, return class for yellow color only
    }
  }
}

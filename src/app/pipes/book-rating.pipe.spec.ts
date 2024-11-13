import { BookRatingPipe } from './book-rating.pipe';

describe('BookRatingPipe', () => {
  it('create an instance', () => {
    const pipe = new BookRatingPipe();
    expect(pipe).toBeTruthy();
  });
});

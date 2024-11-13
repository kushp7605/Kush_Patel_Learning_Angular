import { QuoteByAuthorPipe } from './quote-by-author.pipe';

describe('QuoteByAuthorPipe', () => {
  it('create an instance', () => {
    const pipe = new QuoteByAuthorPipe();
    expect(pipe).toBeTruthy();
  });
});

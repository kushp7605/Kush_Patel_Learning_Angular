import { HighlightOnFocusDirective } from './highlight-on-focus.directive';
import { ElementRef } from '@angular/core';


describe('HighlightOnFocusDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = new ElementRef(document.createElement('input'));
    const directive = new HighlightOnFocusDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});

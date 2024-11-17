import { HoverHighlightDirective } from './hover-highlight.directive';
import { ElementRef } from '@angular/core';

describe('HoverHighlightDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = new ElementRef(document.createElement('input'));
    const directive = new HoverHighlightDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
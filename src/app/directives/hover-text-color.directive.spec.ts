import { ElementRef } from '@angular/core';
import { HoverTextColorDirective } from './hover-text-color.directive';

describe('HoverTextColorDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = new ElementRef(document.createElement('input'));
    const directive = new HoverTextColorDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});

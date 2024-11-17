import { AutoFocusDirective } from './auto-focus.directive';
import { ElementRef } from '@angular/core';

describe('AutoFocusDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = new ElementRef(document.createElement('input'));
    const directive = new AutoFocusDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});

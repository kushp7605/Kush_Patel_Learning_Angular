import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @Input() appHoverHighlight = ''; // Color on hover
  @Input() appLeaveHighlight = ''; // Color on mouse leave

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHoverHighlight || 'lightblue'); // Default hover color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.appLeaveHighlight || 'darkkhaki'); // Default leave color
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

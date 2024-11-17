import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverTextColor]',
  standalone: true
})

export class HoverTextColorDirective {
  @Input() appHoverTextColor = ''; // Text color for hover
  @Input() appLeaveTextColor = ''; // Text color for leave

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeTextColor(this.appHoverTextColor || 'darkorange'); // Default hover text color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeTextColor(this.appLeaveTextColor || 'darkkhaki'); // Default leave text color
  }

  private changeTextColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}

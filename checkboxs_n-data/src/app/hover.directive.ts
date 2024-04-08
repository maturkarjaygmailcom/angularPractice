import { Directive, Input, input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  @Input() appHover = ""

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") aa() {
    this.highlight(this.appHover)
  }

  // @HostListener("mouseenter") onMouseEnter() {
  //   this.highlight(this.appHover);
  // }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("")
  }

  private highlight(color: string) {
    // this.el.nativeElement.style.color = color
    this.el.nativeElement.style.margin=color
  }

}

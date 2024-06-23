import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTest]',
  standalone: true
})
export class TestDirective {
  @Input() appTest: string = "";
  constructor(private el: ElementRef) { }
  @HostListener("mouseenter") mouseEnter() {

    this.fun1(this.appTest)
  }

  @HostListener("mouseleave") mouseLeave() {
    this.fun1("")
  }

  private fun1(color: string) {
    this.el.nativeElement.style.color = color
  }

}

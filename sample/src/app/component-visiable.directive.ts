import { style } from '@angular/animations';
import { BlockParameter } from '@angular/compiler';
import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, TemplateRef } from '@angular/core';
import { reduce } from 'underscore';

@Directive({
  selector: '[appComponentVisiable]',
  standalone: true
})
export class ComponentVisiableDirective {
  @Input() appComponentVisiable = ""
  @Input() side = ""

  constructor(private elementRef: ElementRef,private renderer:Renderer2) { }
  @HostBinding("style.background-color") color: string = ""
  @HostBinding("style.marginLeft") sideleft: string = ""
  @HostBinding("style.backgroundColor") bgcolor: string = ""

  @HostListener("click") onmouseclick() {
    this.renderer.setStyle(this.elementRef.nativeElement,"background-color",this.appComponentVisiable)
this.renderer.addClass(this.elementRef.nativeElement,"sdd")

    // this.sideleft = this.side
    // this.bgcolor = "black"
    // this.elementRef.nativeElement.style.margin='50%'
    // this.color = this.appComponentVisiable
  }
  @HostListener("mouseenter") onmouseenter() {
    // setInterval(()=>{
      // this.bgcolor = "black"
      // },1000)
      // this.bgcolor = "white"
      

  }
  @HostListener("mouseleave") onmosuseleave() {
  //   this.bgcolor = "black"
this.renderer.removeClass(this.elementRef.nativeElement,"sdd")
// this.renderer.appendChild("div","hkjhjh")
  }

}

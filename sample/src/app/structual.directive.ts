import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructual]',
  standalone: true
})
export class StructualDirective {
  @Input() set appStructual(condition: boolean) {
    if (condition) {
      this.vcr.createEmbeddedView(this.templerRef)
    }
    else {
      this.vcr.clear()
    }

  }

  constructor(private templerRef: TemplateRef<any>, private vcr: ViewContainerRef) { }


  // ngOnInit(): void {

  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (this.appStructual) {
  //     this.vcr.createEmbeddedView(this.templerRef)
  //   }
  //   else {
  //     this.vcr.clear()
  //   }
  // }


}

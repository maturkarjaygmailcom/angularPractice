import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppIf]',
  standalone: true
})
export class AppIfDirective {
  private hasView = false
  constructor(private tr: TemplateRef<any>, private vc: ViewContainerRef) { }

  @Input() set appAppIf(condition: boolean) {
    console.log(condition);

    if (condition && !this.hasView) {
      this.vc.createEmbeddedView(this.tr)
      // this.hasView =  true
      console.log(condition, this.hasView)
    }
    else if (!condition && this.hasView) {
      this.vc.clear();
      // console.log(condition, this.hasView)

      this.hasView = false
    }

  }


}

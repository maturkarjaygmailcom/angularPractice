import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, output } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,ProductDetailsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnChanges {

  @Input() addTocartProduct: any = [];
  @Input() buttonState: any = [];
  @Output() hideEvent = new EventEmitter()

  addtocartBtnVisibility = false
  dashboradVisbility = false
  addtocartPageVisibility = false
  footerVisibility=false
  count = 0
  constructor() {
    this.count = 0;
    // console.log(this.addTocartProduct)
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.count = this.addTocartProduct.length
    // console.log(this.count, this.addTocartProduct)

    if (this.addTocartProduct.length >= 1) {
      this.addtocartBtnVisibility = true
      this.footerVisibility = true
    }
  }

  addToCart() {
    this.hideEvent.emit(this.dashboradVisbility)
    this.addtocartPageVisibility = true
    this.footerVisibility=false
  }
}

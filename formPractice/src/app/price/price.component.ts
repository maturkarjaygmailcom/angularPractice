import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent implements OnChanges, OnInit {
  @Input('ADDEDPRODUCT') public paymentDetails: any[] = []
  @Input('TOTAL_PRICE') public total_price = 0
  @Input('COUNT') public count = 0
  constructor() {
  }
  ngOnInit(): void {
    console.log(this.paymentDetails)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.paymentDetails)
    console.log(this.count)
    console.log(this.total_price)

  }

}

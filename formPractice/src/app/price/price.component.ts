import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, MaxLengthValidator, MinLengthValidator, RequiredValidator } from '@angular/forms';
import { elementAt } from 'rxjs';
import _ from "underscore"
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
  count1 = 0
  total_price1 = 0
  
  constructor(private fb: FormBuilder) {

  }

  // registartionForm = this.fb.group({
  //   address1: ['',RequiredValidator,MinLengthValidator],
  //   address2: ['nvs'],
  //   city: ['navsari'],
  //   state: ['gujarat'],
  //   quantity: [0],
  //   total_amount: [0]
  // })


  ngOnInit(): void {
    console.log(this.paymentDetails)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.paymentDetails)
    console.log(this.count)
    console.log(this.total_price)

    _.map(this.paymentDetails, element => {
      this.count1 = this.count1 + element.quantity
      this.total_price1 = this.total_price1 + element.DiscountPrice
    })

  }


}

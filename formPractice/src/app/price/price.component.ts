import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import _ from "underscore"
@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent implements OnChanges, OnInit {
  @Input('ADDEDPRODUCT') public paymentDetails: any[] = []
  @Input('TOTAL_PRICE') public total_price = 0
  @Input('COUNT') public count = 0
  count1 = 0
  total_price1 = 0
  address1=""
  address2=""
  Recommended=false
  payment=false
  address_componet=true

 constructor(){}
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
    this.payment=false
    this.Recommended=false
    this.address_componet=true

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

  addressComponent(){
    this.Recommended=true
    this.payment=false
    this.address_componet=false
  }

  payment_component(){
    this.Recommended=false
    this.payment=true
    this.address_componet=false

  }
}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, MaxLengthValidator, MinLengthValidator, RequiredValidator } from '@angular/forms';

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

  }


}

import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import _ from "underscore"

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnChanges {
  @Input() addedProduct: any = [];
  data: any = []
  newArray: any = []
  ngOnInIt() {
    console.log()
  }
  ngOnChanges(changes: SimpleChanges): void {


    this.data = _.groupBy(this.addedProduct, 'id')


    _.each(this.data, (elem, i) => {
      let key: any = _.keys(this.data[i])
      console.log(elem[key])

      if (elem.length > 1) {
        elem[0]["quantity"] = elem.length
        this.newArray.push(elem[0])
      }
      else {
        let key: any = _.keys(this.data[i])
        elem[0]["quantity"] = 1
        this.newArray.push(elem[key])
      }
      // console.log(this.data)

    })
    this.addedProduct = this.newArray
  }
  onclickIncreament(quantity: number, index: number) {
    this.addedProduct[index].quantity = this.addedProduct[index].quantity + 1

  }
  onclickDecreament(quantity: number, index: number) {
    this.addedProduct[index].quantity = this.addedProduct[index].quantity - 1

  }

  deleteItem(index:number) {
    this.addedProduct.splice(index,1)
  }
  payment(){
    
  }
}

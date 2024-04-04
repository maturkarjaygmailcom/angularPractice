import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import _ from "underscore"
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule, PriceComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnChanges {
  @Input() addedProduct: any = [];
  @Output() show_dashborad = new EventEmitter()

  data: any = []
  newArray: any = []
  visibility_payment: boolean = false;

  count = 0
  total_price = 0

  ngOnInIt() {

  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log(this.addedProduct)

    this.data = _.groupBy(this.addedProduct, 'id')


    _.each(this.data, (element, i) => {
      let key: any = _.keys(this.data[i])
      console.log(element[key])
      let DiscountPrice = (element[0].price - (element[0].price * (element[0].discountPercentage / 100)))

      if (element.length > 1) {
        element[0]["quantity"] = element.length
        element[0]["DiscountPrice"] = DiscountPrice * parseInt(element[0].quantity)
        this.newArray.push(element[0])

        this.total_price = this.total_price + DiscountPrice
        console.log(this.total_price);

      }
      else {
        let key: any = _.keys(this.data[i])
        element[0]["quantity"] = 1
        element[0]["DiscountPrice"] = DiscountPrice * element[0].quantity
        this.newArray.push(element[key])

        this.total_price = this.total_price + DiscountPrice
        console.log(this.total_price);

      }

    })

    this.addedProduct = this.newArray
    this.count = this.addedProduct.length

    if (this.addedProduct.length > 1) {
      this.count = _.reduce(this.addedProduct, (x, y) => {
        return x.quantity + y.quantity
      })
      this.total_price = _.reduce(this.addedProduct, (x, y) => {
        return ((x.price - (x.price * (x.discountPercentage / 100))) * x.quantity) + ((y.price - (y.price * (y.discountPercentage / 100))) * y.quantity)
      })

      console.log(this.total_price);

    }
    else {

      // let DiscountPrice = (this.addedProduct[0].price - (this.addedProduct[0].price * (this.addedProduct[0].discountPercentage / 100)))

      this.count = this.addedProduct[0].quantity
      this.total_price = this.addedProduct[0].DiscountPrice

      // this.total_price = this.total_price * this.addedProduct.quantity
      // console.log(this.total_price)
    }
    console.log(this.newArray)
  }

  onclickIncreament(quantity: number, price: any, index: number) {
    let orignal_price = this.addedProduct[index].price - (this.addedProduct[index].price * (this.addedProduct[index].discountPercentage / 100))

    this.addedProduct[index].quantity = quantity + 1

    this.addedProduct[index].DiscountPrice = orignal_price * this.addedProduct[index].quantity

    if (this.addedProduct.length > 1) {

      this.total_price = _.reduce(this.addedProduct, (x, y) => {

        return (x.price - (x.price * (x.discountPercentage / 100))) + (y.price - (y.price * (y.discountPercentage / 100)))
      })
      console.log(this.total_price)

    }
    else {
      this.count = this.addedProduct[0].quantity
      this.total_price = this.addedProduct[index].DiscountPrice
      console.log(this.total_price)
    }
  }
  onclickDecreament(quantity: number, price: number, index: number) {
    let orignal_price = (this.addedProduct[index].price - (this.addedProduct[index].price * (this.addedProduct[index].discountPercentage / 100)))

    this.addedProduct[index].quantity = this.addedProduct[index].quantity - 1

    this.addedProduct[index].DiscountPrice = orignal_price * this.addedProduct[index].quantity

    if (this.addedProduct.length > 1) {
      this.total_price = _.reduce(this.addedProduct, (x, y) => {
        return x.price - (x.price * (x.discountPercentage / 100)) + y.price - (y.price * (y.discountPercentage / 100))
      })
    }
    else {
      this.count = this.addedProduct[0].quantity
      this.total_price = this.addedProduct[index].DiscountPrice
      console.log(this.total_price)
    }

  }

  deleteItem(index: number) {
    this.addedProduct.splice(index, 1)
    // this.total_price = _.each(this.addedProduct, element => { this.total_price = this.total_price + element.DiscountPrice })
    // console.log(this.total_price)
  }

  payment() {
    this.visibility_payment = !this.visibility_payment
    console.log(this.addedProduct)
    console.log(this.visibility_payment)
  }
  goto_home() {
    this.show_dashborad.emit(true)
  }
}

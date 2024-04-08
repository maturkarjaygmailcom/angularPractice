import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyDataService } from './my-data.service';
import { CommonModule } from '@angular/common';
import _ from "underscore"
import { elementAt } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoverDirective } from './hover.directive';
import { TestDirective } from './test.directive';
import { AppIfDirective } from './app-if.directive';
import { FromsComponent } from './froms/froms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DashboardComponent, HoverDirective, TestDirective, AppIfDirective,FromsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges {
  condition: boolean = true
  public product_array: any[] = []

  category_btn = false
  brand_btn = false
  discount_btn = false
  rating_btn = false
  price_btn = false

  categories: any[] = []
  brands: any[] = []
  temp_brand: any[] = []

  discounts = [
    { 'name': '0%-5%', 'status': false },
    { 'name': '5%-10%', 'status': false },
    { 'name': '10%-15%', 'status': false },
    { 'name': '15%-20%', 'status': false }
  ]

  ratings = [
    { 'name': '⭐', 'status': false },
    { 'name': '⭐⭐', 'status': false },
    { 'name': '⭐⭐⭐', 'status': false },
    { 'name': '⭐⭐⭐⭐', 'status': false },
    { 'name': '⭐⭐⭐⭐⭐', 'status': false }
  ]
  prices = [
    { 'name': '0-100', 'status': false },
    { 'name': '100-500', 'status': false },
    { 'name': '500-1000', 'status': false },
    { 'name': '>1000', 'status': false }
  ]
  selectedcategory: any[] = []
  selectedbrand: any[] = []
  selecteddiscount: any[] = []
  selectedrating: any[] = []
  selectedprice: any[] = []

  send_to_child = false;
  constructor(private _product_data: MyDataService) { }

  // ngOnInit(): void {
  //   this._product_data.getData()
  //     .subscribe(data => {
  //       this.product_array = data.products
  //       console.log(this.product_array)
  //     })
  // }
  fun1() {
    this.condition = !this.condition
    console.log(this.condition)
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  getdata() {
    // console.log(this.product_array)
    // console.log(this.brands, this.categories)
    let qq = _.map(this.product_array, category => {
      let ids: any[] = [];
      _.each(this.product_array, element => {
        if (element.category == category.category) {
          ids.push(element.id)
        }
      })
      return { 'id': ids, 'name': category.category, status: false }
    })
    this.categories = _.uniq(qq, element => { return element.name })
    console.log(this.categories)

    this.brands = _.map(this.product_array, element => {
      return { id: element.id, 'name': element.brand, status: false }
    })
    // console.log(this.brands)

    this.temp_brand = _.map(this.product_array, element => {
      return { id: element.id, 'name': element.brand, status: false, "category": element.category }
    })


  }

  show_category() {
    this.category_btn = !this.category_btn
  }

  show_brand = () => {
    this.brand_btn = !this.brand_btn

    if (this.selectedcategory.length > 0) {

      let brandFilter = _.filter(this.temp_brand, element => {
        return (_.contains(this.selectedcategory, element.category))
      })
      this.brands = _.uniq(brandFilter, element => { return element.name })
      console.log(this.brands);
    }
    else
      if (this.selectedcategory.length <= 0 && this.selectedbrand.length <= 0) {
        this.brands = this.temp_brand;
        this.brands = _.uniq(this.brands, element => { return element.name })
        // console.log(this.brands);
      }
      else {
        if (this.selectedcategory.length <= 0) {
          this.brands = this.temp_brand
          this.brands = _.uniq(this.brands, element => { return element.name })

        }
      }
    console.log(this.selectedbrand)
  }

  show_discount() {
    this.discount_btn = !this.discount_btn
  }
  show_rating() {
    this.rating_btn = !this.rating_btn
  }
  show_price() {
    this.price_btn = !this.price_btn
  }

  onCheckCategory(event: any) {
    let checkedValue = event.target.value
    let checked = event.target.checked

    _.each(this.categories, element => {
      if (element.name == checkedValue) {
        element.status = checked
      }
    })

    if (checked) {
      this.selectedcategory.push(checkedValue)
    } else {

      let index = this.selectedcategory.indexOf(checkedValue)
      this.selectedcategory.splice(index, 1)
    }

    this.send_to_child = !this.send_to_child
  }
  onCheckBrand(event: any) {

    let checkedValue = event.target.value;
    let checked = event.target.checked

    _.each(this.brands, element => {
      if (element.name == checkedValue) {
        element.status = checked
      }
    })

    if (checked) {
      this.selectedbrand.push(checkedValue)
    }
    else {
      let index = this.selectedbrand.indexOf(checkedValue);
      this.selectedbrand.splice(index, 1)
    }
    console.log(this.selectedbrand);
    this.send_to_child = !this.send_to_child
  }
  onCheckDiscount(event: any) {
    let checkedValue = event.target.value;
    let checked = event.target.checked
    let data = []

    _.map(this.discounts, element => {
      if (element.name == checkedValue) {
        element.status = checked
      }
    })


    if (checked) {

      //console.log('asdas')
      if (checkedValue == '0%-5%') {

        data = _.filter(this.product_array, elements => {
          return elements.discountPercentage > 0 && elements.discountPercentage < 5
        })
        //console.log(data)
        this.selecteddiscount = _.union(this.selecteddiscount, data)
      }
      if (checkedValue == '5%-10%') {

        data = _.filter(this.product_array, elements => {
          return elements.discountPercentage > 5 && elements.discountPercentage < 10
        })
        ////console.log(data)
        this.selecteddiscount = _.union(this.selecteddiscount, data)
      }
      if (checkedValue == '10%-15%') {

        data = _.filter(this.product_array, elements => {
          return elements.discountPercentage > 10 && elements.discountPercentage < 15
        })
        ////console.log(data)
        this.selecteddiscount = _.union(this.selecteddiscount, data)
      }
      if (checkedValue == '15%-20%') {
        data = _.filter(this.product_array, elements => {
          return elements.discountPercentage > 15 && elements.discountPercentage < 20
        })
        ////console.log(data)
        this.selecteddiscount = _.union(this.selecteddiscount, data)
      }


    }
    else {

      if (checkedValue == '0%-5%') {

        data = _.filter(this.product_array, elements => {
          return elements.discountPercentage > 0 && elements.discountPercentage < 5
        })
        ////console.log(data)
        this.selecteddiscount = _.difference(this.selecteddiscount, data)
      }
      if (checkedValue == '5%-10%') {

        data = _.filter(this.product_array, elements => {
          return elements.discountPercentage > 5 && elements.discountPercentage < 10
        })
        ////console.log(data)
        this.selecteddiscount = _.difference(this.selecteddiscount, data)
      }
      if (checkedValue == '10%-15%') {

        data = _.filter(this.product_array, elements => {
          return elements.discountPercentage > 10 && elements.discountPercentage < 15
        })
        ////console.log(data)
        this.selecteddiscount = _.difference(this.selecteddiscount, data)
      }
      if (checkedValue == '15%-20%') {


        data = _.filter(this.product_array, elements => {
          return elements.discountPercentage > 15 && elements.discountPercentage < 20
        })
        ////console.log(data)
        this.selecteddiscount = _.difference(this.selecteddiscount, data)
      }
    }

    console.log(this.selecteddiscount)
    this.send_to_child != this.send_to_child
    // this.selecteddiscount = _.pluck(this.selecteddiscount, 'discountPercentage')
    // console.log(this.selecteddiscount)
  }

  onCheckRating(event: any) {
    let checkedValue = event.target.value;
    let checked = event.target.checked
    let data = []
    _.each(this.ratings, element => {
      if (element.name == checkedValue) {
        element.status = checked
      }
    })

    if (checked) {
      if (checkedValue == '⭐') {

        data = _.filter(this.product_array, elements => {
          return elements.rating > 0 && elements.rating < 2
        })
        ////console.log(data)
        this.selectedrating = _.union(this.selectedrating, data)
      }
      if (checkedValue == '⭐⭐') {

        data = _.filter(this.product_array, elements => {
          return elements.rating >= 2 && elements.rating < 3
        })
        ////console.log(data)
        this.selectedrating = _.union(this.selectedrating, data)
      }
      if (checkedValue == '⭐⭐⭐') {

        data = _.filter(this.product_array, elements => {
          return elements.rating >= 3 && elements.rating < 4
        })
        ////console.log(data)
        this.selectedrating = _.union(this.selectedrating, data)
      }
      if (checkedValue == '⭐⭐⭐⭐') {


        data = _.filter(this.product_array, elements => {
          return elements.rating >= 4 && elements.rating < 5
        })
        ////console.log(data)
        this.selectedrating = _.union(this.selectedrating, data)
      }

      if (checkedValue == '⭐⭐⭐⭐⭐') {

        data = _.filter(this.product_array, elements => {
          return elements.rating >= 5 && elements.rating < 6
        })
        ////console.log(data)
        this.selectedrating = _.union(this.selectedrating, data)
      }

    }

    else {

      if (checkedValue == '⭐') {

        data = _.filter(this.product_array, elements => {
          return elements.rating > 0 && elements.rating < 2
        })
        ////console.log(data)
        this.selectedrating = _.difference(this.selectedrating, data)
      }
      if (checkedValue == '⭐⭐') {

        data = _.filter(this.product_array, elements => {
          return elements.rating >= 2 && elements.rating < 3
        })
        ////console.log(data)
        this.selectedrating = _.difference(this.selectedrating, data)
      }
      if (checkedValue == '⭐⭐⭐') {

        data = _.filter(this.product_array, elements => {
          return elements.rating >= 3 && elements.rating < 4
        })
        ////console.log(data)
        this.selectedrating = _.difference(this.selectedrating, data)
      }
      if (checkedValue == '⭐⭐⭐⭐') {


        data = _.filter(this.product_array, elements => {
          return elements.rating >= 4 && elements.rating < 5
        })
        ////console.log(data)
        this.selectedrating = _.difference(this.selectedrating, data)
      }
      if (checkedValue == '⭐⭐⭐⭐⭐') {


        data = _.filter(this.product_array, elements => {
          return elements.rating >= 5 && elements.rating < 6
        })
        ////console.log(data)
        this.selectedrating = _.difference(this.selectedrating, data)
      }

    }
    this.send_to_child != this.send_to_child
    console.log(this.selectedrating)
  }

  onCheckPrice(event: any) {
    let checkedValue = event.target.value;
    let checked = event.target.checked
    let data = []

    _.each(this.prices, element => {
      if (element.name == checkedValue) {
        element.status = checked
      }
    })


    if (checked) {

      if (checkedValue == '0-100') {
        data = _.filter(this.product_array, elements => {
          return elements.price > 0 && elements.price <= 100
        })
        ////console.log(data)
        this.selectedprice = _.union(this.selectedprice, data)
      }
      if (checkedValue == '100-500') {

        data = _.filter(this.product_array, elements => {
          return elements.price > 100 && elements.price <= 500
        })
        ////console.log(data)
        this.selectedprice = _.union(this.selectedprice, data)
      }
      if (checkedValue == '500-1000') {

        data = _.filter(this.product_array, elements => {
          return elements.price > 500 && elements.price <= 1000
        })
        // ////console.log(data)
        this.selectedprice = _.union(this.selectedprice, data)
      }
      if (checkedValue == '>1000') {

        data = _.filter(this.product_array, elements => {
          return elements.price > 1000
        })
        // ////console.log(data)
        this.selectedprice = _.union(this.selectedprice, data)
      }


    }
    else {

      if (checkedValue == '0-100') {
        data = _.filter(this.product_array, elements => {
          return elements.price > 0 && elements.price <= 100
        })
        ////console.log(data)
        this.selectedprice = _.difference(this.selectedprice, data)
      }
      if (checkedValue == '100-500') {

        data = _.filter(this.product_array, elements => {
          return elements.price > 100 && elements.price <= 500
        })
        ////console.log(data)
        this.selectedprice = _.difference(this.selectedprice, data)
      }
      if (checkedValue == '500-1000') {

        data = _.filter(this.product_array, elements => {
          return elements.price > 500 && elements.price <= 1000
        })
        ////console.log(data)
        this.selectedprice = _.difference(this.selectedprice, data)
      }

      if (checkedValue == '>1000') {

        data = _.filter(this.product_array, elements => {
          return elements.price > 1000
        })
        // ////console.log(data)
        this.selectedprice = _.union(this.selectedprice, data)
      }

    }
    this.send_to_child != this.send_to_child
    console.log(this.selectedprice);

  }
}

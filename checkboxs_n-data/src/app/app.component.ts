import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyDataService } from './my-data.service';
import { CommonModule } from '@angular/common';

import _ from "underscore"
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges {
  public product_array: any[] = []

  category_btn = false
  brand_btn = false

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
    { 'name': '500-1000', 'status': false }
  ]
  selectedcategory: any[] = []
  selectedbrand: any[] = []

  constructor(private _product_data: MyDataService) { }

  ngOnInit(): void {
    this._product_data.getData()
      .subscribe(data => {
        this.product_array = data.products
        console.log(this.product_array)
      })
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
        this.brands = this.temp_brand
      }
      else {
        if (this.selectedcategory.length <= 0) {
          this.brands = this.temp_brand
        }
      }
    console.log(this.selectedcategory)
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
  }
}

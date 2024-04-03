import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import _ from "underscore"
import { Console } from 'node:console';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  @Input() public productDetails: any
  public categoryes: any
  VisibalityCategory: boolean = false;
  VisibalityBrand: boolean = false;
  VisibalityDiscount: boolean = false;
  VisibalityRanting: boolean = false;
  VisibalityPrice: boolean = false;
  navbarVisibility = false
  dashboradVisibility = false
  newBrandes: any[] = []
  searchText: string = ""

  categories: any
  brandes: any
  discount: any
  discountPercentages: any
  ratinges: any
  prices: any

  selectedCategoryArray: any[] = []
  selectedBrandArray: string[] = []
  selectedDiscountArray: any
  selectedRatingArray: string[] = []
  selectedPriceArray: string[] = []

  resultObject: any;
  categoryResulte: string[] = []
  brandResulte: string[] = []
  discountResulte: string[] = []
  ratingResulte: string[] = []
  priceResulte: string[] = []

  ngOnInit(): void {
    this.dashboradVisibility = true

    this.VisibalityCategory = false;
    this.VisibalityBrand = false;
    this.VisibalityDiscount = false;
    this.VisibalityRanting = false;
    this.VisibalityPrice = false;

    this.categories = _.map(_.uniq(_.pluck(this.productDetails, 'category')), category => {
      let categoryObject: any = { "name": category, "status": false }
      return categoryObject
    })
    // console.log(this.categories)

    this.brandes = _.map(_.uniq(_.pluck(this.productDetails, 'brand')), brand => {
      let brandObject: any = { "name": brand, "status": false }
      return brandObject
    })

    this.discountPercentages = _.map(_.uniq(_.pluck(this.productDetails, 'discountPercentage')), discount => {
      let discountObject: any = { "name": discount, "status": false }
      return discountObject
    })

    this.ratinges = _.map(_.uniq(_.pluck(this.productDetails, 'rating')), rating => {
      let ratingObject: any = { "name": rating, "status": false }
      return ratingObject
    })
    this.prices = _.map(_.uniq(_.pluck(this.productDetails, 'price')), price => {
      let priceObject: any = { "name": price, "status": false }
      return priceObject
    })

    // console.log((this.categories))
    // console.log((this.brandes))
    // console.log((this.discountPercentages))
    // console.log((this.ratinges))
    // console.log((this.prices))
    // // this.brandes = _.uniq(_.pluck(this.productDetails, 'brand'))

    // this.discountPercentages = _.uniq(_.pluck(this.productDetails, 'discountPercentage'))
    // this.ratinges = _.uniq(_.pluck(this.productDetails, 'rating'))
    // this.prices = _.uniq(_.pluck(this.productDetails, 'price'))

    this.resultObject = this.productDetails;

  }
  showNavbar() {
    this.navbarVisibility = !this.navbarVisibility
    this.VisibalityCategory = !this.VisibalityCategory
  }
  showCategory() {
    this.VisibalityCategory = !this.VisibalityCategory;
    this.VisibalityBrand = false;
    this.VisibalityDiscount = false;
    this.VisibalityRanting = false;
    this.VisibalityPrice = false;
  }
  showBrand() {
    this.VisibalityCategory = false;
    this.VisibalityBrand = (!this.VisibalityBrand)
    this.VisibalityDiscount = false;
    this.VisibalityRanting = false;
    this.VisibalityPrice = false;
    console.log(this.VisibalityBrand, this.VisibalityDiscount,)
    //   this.VisibalityRanting,
    //   this.VisibalityPrice);

    console.log(this.brandes)

    if (this.selectedCategoryArray.length <= 0) {
      console.log("if")

      this.newBrandes = _.map(_.uniq(_.pluck(this.productDetails, 'brand')), brand => {
        let brandObject: any = { "name": brand, "status": false }
        return brandObject
      })
      console.log(this.brandes)
    } else {
      console.log("Else")
      let tempBrands = _.map((this.productDetails), element => {
        if (_.contains(this.selectedCategoryArray, element.category))
          return ({ "name": element.brand, "status": false })
        return element
      })

      this.newBrandes = _.uniq(tempBrands, (element) => {
        return element.name
      })

      console.log("otter")
      console.log(this.newBrandes)
    }


  }

  showDiscount() {
    this.VisibalityCategory = false;
    this.VisibalityBrand = false;
    this.VisibalityDiscount = (!this.VisibalityDiscount);
    this.VisibalityRanting = false;
    this.VisibalityPrice = false;
    // console.log(this.discountPercentages);

  }
  showRating() {
    this.VisibalityCategory = false;
    this.VisibalityBrand = false;
    this.VisibalityDiscount = false;
    this.VisibalityRanting = (!this.VisibalityRanting);
    this.VisibalityPrice = false;
    // console.log(this.ratinges);

  }
  showPrice() {
    this.VisibalityCategory = false;
    this.VisibalityBrand = false;
    this.VisibalityDiscount = false;
    this.VisibalityRanting = false;
    this.VisibalityPrice = (!this.VisibalityPrice);
    // console.log(this.prices);

  }

  onSelectCategory(event: any) {

    let category: string = event.target.value
    let checked: string = event.target.checked

    _.map(this.categories, element => {
      if (element.name == category) {
        element.status = checked
      }
    })

    if (checked) {
      this.selectedCategoryArray.unshift(category)
    }
    else {
      let index = this.selectedCategoryArray.indexOf(category)
      this.selectedCategoryArray.splice(index, 1)
    }

    this.resultObject = _.filter(this.productDetails, elements => {
      return _.contains(this.selectedCategoryArray, elements.category)
    })

    // console.log(this.resultObject)
    // // this.resultObject.unshift({ "category": this.selectedCategoryArray })

    if (this.selectedCategoryArray.length < 1) {
      this.resultObject = this.productDetails;
    }

  }

  onSelectBrand(event: any) {
    console.log("dsdsd")

    let checked: string = event.target.checked
    let brand: string = event.target.value

    _.map(this.newBrandes, element => {
      if (element.name == brand) {
        element.status = checked
      }
    })

    if (checked) {
      this.selectedBrandArray.unshift(brand)
    }
    else {
      let index = this.selectedBrandArray.indexOf(brand)
      this.selectedBrandArray.splice(index, 1)
    }

    // this.resultObject.unshift({ "barnd": this.selectedBrandArray })
    // console.log(this.selectedBrandArray.length);

    this.resultObject = _.filter(this.productDetails, elements => {
      return _.contains(this.selectedBrandArray, elements.brand)
    })


    if (this.selectedBrandArray.length <= 0) {
      this.resultObject = this.productDetails
    }

    // if (this.selectedBrandArray.length <= 0) {
    //   this.resultObject = this.productDetails;
    // }
    // else {

    //   if (this.selectedCategoryArray.length >= 1) {
    //     this.resultObject = _.filter(this.resultObject, elements => {
    //       return _.contains(this.selectedBrandArray, elements.brand)
    //     })
    //   }
    //   // else {
    //   //     this.resultObject = _.filter(this.productDetails, elements => {
    //   //       return _.contains(this.selectedBrandArray, elements.brand)
    //   //       console.log(this.resultObject)
    //   //     })
    //   //   }
    // }

  }

  onSelectDiscount(event: any) {

    let checked: string = event.target.checked
    let discount: string = event.target.value
    console.log(discount);
    var data = []

    // _.map(this.discountPercentages, element => {
    //   if (element.name == discount) {
    //     element.status = checked
    //   }
    // })


    if (checked) {
      if (discount == '0-5') {

        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 0 && elements.discountPercentage < 5
        })
        console.log(data)
        this.selectedDiscountArray = _.union(this.selectedDiscountArray, data)
      }
      if (discount == '5-10') {

        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 5 && elements.discountPercentage < 10
        })
        console.log(data)
        this.selectedDiscountArray = _.union(this.selectedDiscountArray, data)
      }
      if (discount == '10-15') {

        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 10 && elements.discountPercentage < 15
        })
        console.log(data)
        this.selectedDiscountArray = _.union(this.selectedDiscountArray, data)
      }
      if (discount == '15-20') {


        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 15 && elements.discountPercentage < 20
        })
        console.log(data)
        this.selectedDiscountArray = _.union(this.selectedDiscountArray, data)
      }


      this.resultObject = this.selectedDiscountArray
    }
    else {

      if (discount == '0-5') {

        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 0 && elements.discountPercentage < 5
        })
        console.log(data)
        this.selectedDiscountArray = _.difference(this.selectedDiscountArray, data)
      }
      if (discount == '5-10') {

        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 5 && elements.discountPercentage < 10
        })
        console.log(data)
        this.selectedDiscountArray = _.difference(this.selectedDiscountArray, data)
      }
      if (discount == '10-15') {

        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 10 && elements.discountPercentage < 15
        })
        console.log(data)
        this.selectedDiscountArray = _.difference(this.selectedDiscountArray, data)
      }
      if (discount == '15-20') {


        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 15 && elements.discountPercentage < 20
        })
        console.log(data)
        this.selectedDiscountArray = _.difference(this.selectedDiscountArray, data)
      }

      this.resultObject = this.selectedDiscountArray

    }


    if (this.selectedDiscountArray.length < 1) {
      this.resultObject = this.productDetails;
    }

  }

  onSelectRating(event: any) {

    let checked: boolean = event.target.checked
    let rating: string = event.target.value

    var data = []

    if (checked) {
      if (rating == '1') {

        data = _.filter(this.productDetails, elements => {
          return elements.rating > 0 && elements.rating < 2
        })
        console.log(data)
        this.selectedRatingArray = _.union(this.selectedRatingArray, data)
      }
      if (rating == '2') {

        data = _.filter(this.productDetails, elements => {
          return elements.rating >= 2 && elements.rating < 3
        })
        console.log(data)
        this.selectedRatingArray = _.union(this.selectedRatingArray, data)
      }
      if (rating == '3') {

        data = _.filter(this.productDetails, elements => {
          return elements.rating >= 3 && elements.rating < 4
        })
        console.log(data)
        this.selectedRatingArray = _.union(this.selectedRatingArray, data)
      }
      if (rating == '4') {


        data = _.filter(this.productDetails, elements => {
          return elements.rating >= 4 && elements.rating < 5
        })
        console.log(data)
        this.selectedRatingArray = _.union(this.selectedRatingArray, data)
      }

      if (rating == '5') {

        data = _.filter(this.productDetails, elements => {
          return elements.rating >= 5 && elements.rating < 6
        })
        console.log(data)
        this.selectedRatingArray = _.union(this.selectedRatingArray, data)
      }

      this.resultObject = this.selectedRatingArray
    }
    else {

      if (rating == '1') {

        data = _.filter(this.productDetails, elements => {
          return elements.rating > 0 && elements.rating < 2
        })
        console.log(data)
        this.selectedRatingArray = _.difference(this.selectedRatingArray, data)
      }
      if (rating == '2') {

        data = _.filter(this.productDetails, elements => {
          return elements.rating >= 2 && elements.rating < 3
        })
        console.log(data)
        this.selectedRatingArray = _.difference(this.selectedRatingArray, data)
      }
      if (rating == '3') {

        data = _.filter(this.productDetails, elements => {
          return elements.rating >= 3 && elements.rating < 4
        })
        console.log(data)
        this.selectedRatingArray = _.difference(this.selectedRatingArray, data)
      }
      if (rating == '4') {


        data = _.filter(this.productDetails, elements => {
          return elements.rating >= 4 && elements.rating < 5
        })
        console.log(data)
        this.selectedRatingArray = _.difference(this.selectedRatingArray, data)
      }
      if (rating == '5') {


        data = _.filter(this.productDetails, elements => {
          return elements.rating >= 5 && elements.rating < 6
        })
        console.log(data)
        this.selectedRatingArray = _.difference(this.selectedRatingArray, data)
      }

      this.resultObject = this.selectedRatingArray



    }

  }
  onSelectPrice(event: any) {

    let checked: string = event.target.checked
    let price: string = event.target.value
    var data = []

    if (checked) {

      if (price == '0-100') {
        data = _.filter(this.productDetails, elements => {
          return elements.price > 0 && elements.price <= 100
        })
        console.log(data)
        this.selectedPriceArray = _.union(this.selectedPriceArray, data)
      }
      if (price == '100-500') {

        data = _.filter(this.productDetails, elements => {
          return elements.price > 100 && elements.price <= 500
        })
        console.log(data)
        this.selectedPriceArray = _.union(this.selectedPriceArray, data)
      }
      if (price == '500-1000') {

        data = _.filter(this.productDetails, elements => {
          return elements.price > 500 && elements.price <= 1000
        })
        console.log(data)
        this.selectedPriceArray = _.union(this.selectedPriceArray, data)
      }

      this.resultObject = this.selectedPriceArray
    }
    else {

      if (price == '0-100') {
        data = _.filter(this.productDetails, elements => {
          return elements.price > 0 && elements.price <= 100
        })
        console.log(data)
        this.selectedPriceArray = _.difference(this.selectedPriceArray, data)
      }
      if (price == '100-500') {

        data = _.filter(this.productDetails, elements => {
          return elements.price > 100 && elements.price <= 500
        })
        console.log(data)
        this.selectedPriceArray = _.difference(this.selectedPriceArray, data)
      }
      if (price == '500-1000') {

        data = _.filter(this.productDetails, elements => {
          return elements.price > 500 && elements.price <= 1000
        })
        console.log(data)
        this.selectedPriceArray = _.difference(this.selectedPriceArray, data)
      }

      this.resultObject = this.selectedPriceArray
      console.log(this.resultObject, this.selectedPriceArray);

      // if (this.selectedPriceArray.length <= 0) {
      //   this.resultObject = this.productDetails
      // }

    }

    // this.resultObject.unshift({ "price": this.selectedPriceArray })


    if (this.selectedPriceArray.length <= 0) {
      this.resultObject = this.productDetails
    }
  }

  home() {
    this.dashboradVisibility = !this.dashboradVisibility
  }
  show_dashboard() {

  }

  // filter() {
  //   if (this.selectedCategoryArray["'category'"]) {

  //   } else {
  //     this.resultObject.unshift({ "category": this.selectedCategoryArray })
  //   }
  //   this.resultObject.unshift({ "barnd": this.selectedBrandArray })
  //   this.resultObject.unshift({ "discount": this.selectedDiscountArray })
  //   this.resultObject.unshift({ "rating": this.selectedRatingArray })
  //   this.resultObject.unshift({ "price": this.selectedPriceArray })
  //   console.log(this.resultObject)
  // }
}


// if (_.contains(this.categories, checked) && !_.contains(this.selectedCategoryArray, checked))
//   this.selectedCategoryArray.unshift(checked)

// else if (_.contains(this.selectedCategoryArray, checked))
//   this.selectedCategoryArray.splice(this.selectedCategoryArray.indexOf(checked), 1)


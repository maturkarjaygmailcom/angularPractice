import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import _, { result } from "underscore"
import { Console, log } from 'node:console';
import { resolve } from 'node:path';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  @Input() public productDetails1: any
  public productDetails: any[] = []
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

  getData: boolean = false
  categoryObject: any[] = []
  brandObject: any[] = []

  categories: any
  brandes: any
  tempBrands: any[] = [];

  discount: any
  discountPercentages: any
  ratinges: any
  prices: any

  selectedCategoryIds: any[] = []

  selectedCategoryArray: any[] = []
  selectedBrandArray: any[] = []
  selectedDiscountArray: any[] = []
  selectedRatingArray: string[] = []
  selectedPriceArray: string[] = []

  emptyCategoryArray = false
  emptyBrandArray = false
  emptyDiscountArray = false
  emptyRatingArray = false
  emptyPriceArray = false

  resultObject: any;
  categoryResulte: string[] = []
  brandResulte: string[] = []
  discountResulte: string[] = []
  ratingResulte: string[] = []
  priceResulte: string[] = []

  discountArray = [
    { 'name': '0-5', 'status': false },
    { 'name': '5-10', 'status': false },
    { 'name': '10-15', 'status': false },
    { 'name': '15-20', 'status': false }
  ]

  ratingArray = [
    { 'name': '1', 'status': false },
    { 'name': '2', 'status': false },
    { 'name': '3', 'status': false },
    { 'name': '4', 'status': false },
    { 'name': '5', 'status': false }
  ]
  priceArray = [
    { 'name': '0-100', 'status': false },
    { 'name': '100-500', 'status': false },
    { 'name': '500-1000', 'status': false }
  ]

  ngOnInit(): void {
    this.dashboradVisibility = true

    this.VisibalityCategory = false;
    this.VisibalityBrand = false;
    this.VisibalityDiscount = false;
    this.VisibalityRanting = false;
    this.VisibalityPrice = false;

    this.productDetails = this.productDetails1

    this.categories = _.map(_.uniq(_.pluck(this.productDetails, 'category')), category => {
      let categoryObject: any = { "name": category, "status": false }
      return categoryObject
    })

    // this.categories = _.map(_.uniq(_.pluck(this.productDetails, 'category')), category => {
    //   let categoryObject: any = { "name": category, "status": false }
    //   return categoryObject
    // })

    // ////console.log(this.categories)
    // _.each(this.productDetails, element => {
    //   this.selectedCategoryIds.push({ 'id': element.id, "name": element.category, "status": false })
    // })
    ////console.log(this.selectedCategoryIds)

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

    // console.log(this.prices);

    // ////console.log((this.categories))
    // ////console.log((this.brandes))
    // ////console.log((this.discountPercentages))
    // ////console.log((this.ratinges))
    // ////console.log((this.prices))
    // // this.brandes = _.uniq(_.pluck(this.productDetails, 'brand'))

    // this.discountPercentages = _.uniq(_.pluck(this.productDetails, 'discountPercentage'))
    // this.ratinges = _.uniq(_.pluck(this.productDetails, 'rating'))
    // this.prices = _.uniq(_.pluck(this.productDetails, 'price'))

    this.resultObject = this.productDetails1;
    console.log(this.resultObject, this.productDetails1);

    //
  }
  showNavbar() {
    this.navbarVisibility = !this.navbarVisibility
    this.VisibalityCategory = true;
    this.VisibalityBrand = false;
    this.VisibalityDiscount = false;
    this.VisibalityRanting = false;
    this.VisibalityPrice = false;
  }

  showCategory() {
    this.VisibalityCategory = true;
    this.VisibalityBrand = false;
    this.VisibalityDiscount = false;
    this.VisibalityRanting = false;
    this.VisibalityPrice = false;
  }
  showBrand() {
    this.VisibalityCategory = false;
    this.VisibalityBrand = true;
    this.VisibalityDiscount = false;
    this.VisibalityRanting = false;
    this.VisibalityPrice = false;
    ////console.log(this.VisibalityBrand, this.VisibalityDiscount)
    //   this.VisibalityRanting,
    //   this.VisibalityPrice);

    ////console.log(this.brandes)

    if (this.selectedCategoryArray.length <= 0) {
      ////console.log("if")

      this.newBrandes = _.map(_.uniq(_.pluck(this.productDetails, 'brand')), brand => {
        let brandObject: any = { "name": brand, "status": false }
        return brandObject
      })
      ////console.log(this.brandes)
    } else if (this.tempBrands.length <= 0) {
      ////console.log("Else")


      _.map((this.productDetails), (element, index) => {
        if (_.contains(this.selectedCategoryArray, element.category))
          this.tempBrands.push({ "name": element.brand, "status": false })
      })

      this.newBrandes = _.uniq(this.tempBrands, (element) => {
        return element.name
      })

      ////console.log("otter")
      ////console.log(this.newBrandes)
    }


  }
  showDiscount() {
    this.VisibalityCategory = false;
    this.VisibalityBrand = false;
    this.VisibalityDiscount = true;
    this.VisibalityRanting = false;
    this.VisibalityPrice = false;
    // ////console.log(this.discountPercentages);

  }
  showRating() {
    this.VisibalityCategory = false;
    this.VisibalityBrand = false;
    this.VisibalityDiscount = false;
    this.VisibalityRanting = true;
    this.VisibalityPrice = false;
    // ////console.log(this.ratinges);

  }
  showPrice() {
    this.VisibalityCategory = false;
    this.VisibalityBrand = false;
    this.VisibalityDiscount = false;
    this.VisibalityRanting = false;
    this.VisibalityPrice = true;
    // ////console.log(this.prices);

  }


  onSelectCategory(event: any) {

    let category: string = event.target.value
    let checked: boolean = event.target.checked

    _.map(this.categories, element => {
      if (element.name == category) {
        element.status = checked
      }
    })

    if (checked) {
      this.selectedCategoryArray.unshift(category)
      console.log("checking....", this.selectedCategoryArray)
    }
    else {
      let index = this.selectedCategoryArray.indexOf(category)
      this.selectedCategoryArray.splice(index, 1)
    }

    // this.resultObject = _.filter(this.productDetails, elements => {
    //   return _.contains(this.selectedCategoryArray, elements.category)
    // })

    if (this.resultObject.length == this.productDetails.length || this.resultObject.length > 0) {
      this.resultObject = _.filter(this.productDetails, elements => {
        return _.contains(this.selectedCategoryArray, elements.category)
      })

    }
    else {

      if (this.selectedBrandArray.length > 0 || this.selectedPriceArray.length > 0 || this.selectedRatingArray.length > 0 || this.selectedDiscountArray.length > 0) {
        this.resultObject = _.filter(this.resultObject, elements => {
          return _.contains(this.selectedCategoryArray, elements.category)
        })
      }
    }
    // // ////console.log(this.resultObject)
    // // // this.resultObject.unshift({ "category": this.selectedCategoryArray })

    // ///////////

    // if (this.selectedBrandArray.length <= 0 || this.selectedPriceArray.length <= 0 || this.selectedRatingArray.length <= 0 || this.selectedDiscountArray.length <= 0) {

    //   if (this.selectedCategoryArray.length < 1) {
    //     this.resultObject = this.productDetails;
    //   }
    // }

    //console.log(this.resultObject)


  }
  onSelectBrand(event: any) {
    ////console.log("dsdsd")

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

      //console.log(this.resultObject)
      // if (this.selectedBrandArray.length >= 1) {
      // if (this.selectedBrandArray.length < 1) {
      //   this.resultObject = _.filter(this.productDetails, elements => {
      //     return _.contains(this.selectedBrandArray, elements.brand)
      //   })
      // }
      // }
    }

    // this.resultObject.unshift({ "barnd": this.selectedBrandArray })
    // ////console.log(this.selectedBrandArray.length);

    /////
    // if (this.selectedCategoryArray.length <= 0 || this.selectedPriceArray.length <= 0 || this.selectedRatingArray.length <= 0 || this.selectedDiscountArray.length <= 0) {

    //   if (this.selectedBrandArray.length < 1) {
    //     this.resultObject = _.filter(this.productDetails, elements => {
    //       return _.contains(this.selectedBrandArray, elements.brand)
    //     })
    //   }
    // }

    if (this.resultObject.length == this.productDetails.length || this.resultObject.length > 0) {
      this.resultObject = _.filter(this.productDetails, elements => {
        return _.contains(this.selectedBrandArray, elements.brand)
      })

    }
    else {

      if (this.selectedCategoryArray.length > 0 || this.selectedPriceArray.length > 0 || this.selectedDiscountArray.length > 0 || this.selectedRatingArray.length > 0) {
        this.resultObject = _.filter(this.resultObject, elements => {
          return _.contains(this.selectedBrandArray, elements.brand)
        })
      }
    }


    // if (this.selectedBrandArray.length <= 0) {
    //   this.resultObject = this.productDetails
    // }

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
    //   //       ////console.log(this.resultObject)
    //   //     })
    //   //   }
    // }


    //console.log(this.resultObject)
  }
  onSelectDiscount(event: any) {

    let checked: boolean = event.target.checked
    let discount: string = event.target.value
    ////console.log(discount);
    var data = []

    _.map(this.discountArray, element => {
      if (element.name == discount) {
        element.status = checked
      }
    })



    if (checked) {

      //console.log('asdas')
      if (discount == '0-5') {

        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 0 && elements.discountPercentage < 5
        })
        //console.log(data)
        this.selectedDiscountArray = _.union(this.selectedDiscountArray, data)
      }
      if (discount == '5-10') {

        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 5 && elements.discountPercentage < 10
        })
        ////console.log(data)
        this.selectedDiscountArray = _.union(this.selectedDiscountArray, data)
      }
      if (discount == '10-15') {

        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 10 && elements.discountPercentage < 15
        })
        ////console.log(data)
        this.selectedDiscountArray = _.union(this.selectedDiscountArray, data)
      }
      if (discount == '15-20') {
        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 15 && elements.discountPercentage < 20
        })
        ////console.log(data)
        this.selectedDiscountArray = _.union(this.selectedDiscountArray, data)
      }

      this.resultObject = this.selectedDiscountArray
      console.log(this.resultObject)
    }
    else {

      if (discount == '0-5') {

        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 0 && elements.discountPercentage < 5
        })
        ////console.log(data)
        this.selectedDiscountArray = _.difference(this.selectedDiscountArray, data)
      }
      if (discount == '5-10') {

        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 5 && elements.discountPercentage < 10
        })
        ////console.log(data)
        this.selectedDiscountArray = _.difference(this.selectedDiscountArray, data)
      }
      if (discount == '10-15') {

        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 10 && elements.discountPercentage < 15
        })
        ////console.log(data)
        this.selectedDiscountArray = _.difference(this.selectedDiscountArray, data)
      }
      if (discount == '15-20') {


        data = _.filter(this.productDetails, elements => {
          return elements.discountPercentage > 15 && elements.discountPercentage < 20
        })
        ////console.log(data)
        this.selectedDiscountArray = _.difference(this.selectedDiscountArray, data)
      }
      // }

      this.resultObject = this.selectedDiscountArray


      console.log(this.resultObject)
    }


    if (this.selectedDiscountArray.length < 1) {
      this.resultObject = this.productDetails;
    }

    //console.log(this.resultObject)

  }

  onSelectRating(event: any) {

    let checked: boolean = event.target.checked
    let rating: string = event.target.value

    var data = []


    _.map(this.ratingArray, element => {
      if (element.name == rating) {
        element.status = checked
        ////console.log(element.status, checked)
      }
      ////console.log(element.status, checked)
    })

    if (checked) {
      if (this.selectedBrandArray.length > 0 || this.selectedCategoryArray.length > 0 || this.selectedPriceArray.length > 0 || this.selectedDiscountArray.length > 0) {

        if (rating == '1') {

          data = _.filter(this.resultObject, elements => {
            return elements.rating > 0 && elements.rating < 2
          })
          ////console.log(data)
          this.selectedRatingArray = _.union(this.selectedRatingArray, data)
        }
        if (rating == '2') {

          data = _.filter(this.resultObject, elements => {
            return elements.rating >= 2 && elements.rating < 3
          })
          ////console.log(data)
          this.selectedRatingArray = _.union(this.selectedRatingArray, data)
        }
        if (rating == '3') {

          data = _.filter(this.resultObject, elements => {
            return elements.rating >= 3 && elements.rating < 4
          })
          ////console.log(data)
          this.selectedRatingArray = _.union(this.selectedRatingArray, data)
        }
        if (rating == '4') {


          data = _.filter(this.resultObject, elements => {
            return elements.rating >= 4 && elements.rating < 5
          })
          ////console.log(data)
          this.selectedRatingArray = _.union(this.selectedRatingArray, data)
        }

        if (rating == '5') {

          data = _.filter(this.resultObject, elements => {
            return elements.rating >= 5 && elements.rating < 6
          })
          ////console.log(data)
          this.selectedRatingArray = _.union(this.selectedRatingArray, data)
        }

        this.resultObject = this.selectedRatingArray
      }
      else {
        if (rating == '1') {

          data = _.filter(this.productDetails, elements => {
            return elements.rating > 0 && elements.rating < 2
          })
          ////console.log(data)
          this.selectedRatingArray = _.union(this.selectedRatingArray, data)
        }
        if (rating == '2') {

          data = _.filter(this.productDetails, elements => {
            return elements.rating >= 2 && elements.rating < 3
          })
          ////console.log(data)
          this.selectedRatingArray = _.union(this.selectedRatingArray, data)
        }
        if (rating == '3') {

          data = _.filter(this.productDetails, elements => {
            return elements.rating >= 3 && elements.rating < 4
          })
          ////console.log(data)
          this.selectedRatingArray = _.union(this.selectedRatingArray, data)
        }
        if (rating == '4') {


          data = _.filter(this.productDetails, elements => {
            return elements.rating >= 4 && elements.rating < 5
          })
          ////console.log(data)
          this.selectedRatingArray = _.union(this.selectedRatingArray, data)
        }

        if (rating == '5') {

          data = _.filter(this.productDetails, elements => {
            return elements.rating >= 5 && elements.rating < 6
          })
          ////console.log(data)
          this.selectedRatingArray = _.union(this.selectedRatingArray, data)
        }

        this.resultObject = this.selectedRatingArray

      }
    }
    else {

      if (rating == '1') {

        data = _.filter(this.productDetails, elements => {
          return elements.rating > 0 && elements.rating < 2
        })
        ////console.log(data)
        this.selectedRatingArray = _.difference(this.selectedRatingArray, data)
      }
      if (rating == '2') {

        data = _.filter(this.productDetails, elements => {
          return elements.rating >= 2 && elements.rating < 3
        })
        ////console.log(data)
        this.selectedRatingArray = _.difference(this.selectedRatingArray, data)
      }
      if (rating == '3') {

        data = _.filter(this.productDetails, elements => {
          return elements.rating >= 3 && elements.rating < 4
        })
        ////console.log(data)
        this.selectedRatingArray = _.difference(this.selectedRatingArray, data)
      }
      if (rating == '4') {


        data = _.filter(this.productDetails, elements => {
          return elements.rating >= 4 && elements.rating < 5
        })
        ////console.log(data)
        this.selectedRatingArray = _.difference(this.selectedRatingArray, data)
      }
      if (rating == '5') {


        data = _.filter(this.productDetails, elements => {
          return elements.rating >= 5 && elements.rating < 6
        })
        ////console.log(data)
        this.selectedRatingArray = _.difference(this.selectedRatingArray, data)
      }

      this.resultObject = this.selectedRatingArray



    }

    console.log(this.resultObject)

  }
  onSelectPrice(event: any) {


    let checked: boolean = event.target.checked
    let price: string = event.target.value
    ////console.log(price);


    var data = []


    _.map(this.priceArray, element => {
      ////console.log(element);

      if (element.name == price) {
        element.status = checked
        ////console.log(element.status, checked)
      }
    })

    if (checked) {


      if (this.selectedBrandArray.length > 0 || this.selectedCategoryArray.length > 0 || this.selectedRatingArray.length > 0 || this.selectedDiscountArray.length > 0) {
        if (price == '0-100') {
          data = _.filter(this.resultObject, elements => {
            return elements.price > 0 && elements.price <= 100
          })
          ////console.log(data)
          this.selectedPriceArray = _.union(this.selectedPriceArray, data)
        }
        if (price == '100-500') {

          data = _.filter(this.resultObject, elements => {
            return elements.price > 100 && elements.price <= 500
          })
          ////console.log(data)
          this.selectedPriceArray = _.union(this.selectedPriceArray, data)
        }
        if (price == '500-1000') {

          data = _.filter(this.resultObject, elements => {
            return elements.price > 500 && elements.price <= 1000
          })
          // ////console.log(data)
          this.selectedPriceArray = _.union(this.selectedPriceArray, data)
        }

        this.resultObject = this.selectedPriceArray
      }
      else {

        if (price == '0-100') {
          data = _.filter(this.productDetails, elements => {
            return elements.price > 0 && elements.price <= 100
          })
          ////console.log(data)
          this.selectedPriceArray = _.union(this.selectedPriceArray, data)
        }
        if (price == '100-500') {

          data = _.filter(this.productDetails, elements => {
            return elements.price > 100 && elements.price <= 500
          })
          ////console.log(data)
          this.selectedPriceArray = _.union(this.selectedPriceArray, data)
        }
        if (price == '500-1000') {

          data = _.filter(this.productDetails, elements => {
            return elements.price > 500 && elements.price <= 1000
          })
          // ////console.log(data)
          this.selectedPriceArray = _.union(this.selectedPriceArray, data)
        }

        this.resultObject = this.selectedPriceArray
      }
    }
    else {

      if (price == '0-100') {
        data = _.filter(this.productDetails, elements => {
          return elements.price > 0 && elements.price <= 100
        })
        ////console.log(data)
        this.selectedPriceArray = _.difference(this.selectedPriceArray, data)
      }
      if (price == '100-500') {

        data = _.filter(this.productDetails, elements => {
          return elements.price > 100 && elements.price <= 500
        })
        ////console.log(data)
        this.selectedPriceArray = _.difference(this.selectedPriceArray, data)
      }
      if (price == '500-1000') {

        data = _.filter(this.productDetails, elements => {
          return elements.price > 500 && elements.price <= 1000
        })
        ////console.log(data)
        this.selectedPriceArray = _.difference(this.selectedPriceArray, data)
      }

      this.resultObject = this.selectedPriceArray
      //console.log(this.resultObject, this.selectedPriceArray);

      // if (this.selectedPriceArray.length <= 0) {
      //   this.resultObject = this.productDetails
      // }

    }

    this.resultObject.unshift({ "price": this.selectedPriceArray })


    if (this.selectedPriceArray.length <= 0) {
      this.resultObject = this.productDetails
    }

    console.log(this.resultObject)
    console.log(this.resultObject)
  }

  home() {
    this.dashboradVisibility = !this.dashboradVisibility
  }
  show_dashboard() {

  }

  Filter() {
    this.productDetails = this.productDetails1
    console.log(this.productDetails)
    // this.getData = !this.getData;
    this.navbarVisibility = false
    let data: any = []
    this.resultObject.length = 0
    this.resultObject = []

    console.log(this.selectedCategoryArray, "sasa");
    console.log(this.productDetails, "sadsa");

    if (this.categories.length > 0) {
      _.map(this.categories, element => {
        console.log(element.name,)

        if (element.status == true) {
          data = _.filter(this.productDetails, product => {
            console.log(element.name, product.category)
            return element.name == product.category
            // console.log(data)
          })
          console.log("qqqqqqq")

        }
        else {
          console.log("aaaaaaaaaaaa")
        }
      })

      if (this.resultObject.length <= 0) {
        console.log(data, this.resultObject)
        this.resultObject.push(data)
        this.resultObject = _.flatten(this.resultObject)
        console.log(this.resultObject)
      }
      else {
        console.log(this.resultObject)
        this.resultObject = _.intersection(this.resultObject, data)
        console.log(this.resultObject)
      }

      // console.log((this.resultObject))
      // console.log(_.flatten(this.resultObject))
    }

    if (this.newBrandes.length > 0) {

      _.map(this.newBrandes, element => {
        if (element.status == true) {
          data = _.filter(this.productDetails, product => {
            return element.name == product.brand
          })
          this.resultObject.push(data)
        }
      })

      if (this.resultObject.length <= 0) {
        this.resultObject.push(data)
        this.resultObject = _.flatten(this.resultObject)
      }
      else {
        this.resultObject = _.intersection(this.resultObject, data)
        //console.log(this.resultObject)
      }

      // console.log(_.flatten(this.resultObject))

    }

    //////
    if (this.discountArray.length > 0) {
      _.map(this.discountArray, element => {
        if (element.status == true) {
          console.log(element.name)
          // data = _.map(this.productDetails, product => {
          if (element.name == '0-5') {

            data = _.filter(this.productDetails, elements => {
              return elements.discountPercentage > 0 && elements.discountPercentage < 5
            })
            //console.log(data)
            this.selectedDiscountArray = _.union(this.selectedDiscountArray, data)
          }
          if (element.name == '5-10') {

            data = _.filter(this.productDetails, elements => {
              return elements.discountPercentage > 5 && elements.discountPercentage < 10
            })
            ////console.log(data)
            this.selectedDiscountArray = _.union(this.selectedDiscountArray, data)
          }
          if (element.name == '10-15') {

            data = _.filter(this.productDetails, elements => {
              return elements.discountPercentage > 10 && elements.discountPercentage < 15
            })
            ////console.log(data)
            this.selectedDiscountArray = _.union(this.selectedDiscountArray, data)
          }
          if (element.name == '15-20') {
            data = _.filter(this.productDetails, elements => {
              return elements.discountPercentage > 15 && elements.discountPercentage < 20
            })
            ////console.log(data)
            this.selectedDiscountArray = _.union(this.selectedDiscountArray, data)
          }

        }

      })

      if (this.resultObject.length <= 0 && this.selectedDiscountArray.length > 0) {
        this.resultObject.push(this.selectedDiscountArray)
        this.resultObject = _.flatten(this.resultObject)
        console.log(this.resultObject)
      }
      else if (this.resultObject.length > 0 && this.selectedDiscountArray.length > 0) {
        this.resultObject = _.intersection(this.resultObject, this.selectedDiscountArray)
        console.log(this.resultObject)
      }

      // console.log(_.flatten(this.resultObject))
    }




    if (this.priceArray.length > 0) {

      _.map(this.priceArray, element => {
        if (element.status == true) {
          if (element.name == '0-100') {
            data = _.filter(this.resultObject, elements => {
              return elements.price > 0 && elements.price <= 100
            })
            ////console.log(data)
            this.selectedPriceArray = _.union(this.selectedPriceArray, data)
          }
          if (element.name == '100-500') {

            data = _.filter(this.resultObject, elements => {
              return elements.price > 100 && elements.price <= 500
            })
            ////console.log(data)
            this.selectedPriceArray = _.union(this.selectedPriceArray, data)
          }
          if (element.name == '500-1000') {

            data = _.filter(this.resultObject, elements => {
              return elements.price > 500 && elements.price <= 1000
            })
            // ////console.log(data)
            this.selectedPriceArray = _.union(this.selectedPriceArray, data)
          }
        }

        if (this.resultObject.length <= 0 && this.selectedPriceArray.length > 0) {
          this.resultObject.push(this.selectedPriceArray)
          this.resultObject = _.flatten(this.resultObject)
          console.log(this.resultObject)
        }
        else if (this.resultObject.length > 0 && this.selectedPriceArray.length > 0) {
          console.log(this.resultObject, this.selectedPriceArray)
          this.resultObject = _.intersection(this.resultObject, this.selectedPriceArray)
          console.log(this.resultObject)
        }
      })

      //   // //console.log(_.flatten(this.resultObject))
    }

    if (this.ratingArray.length > 0) {

      _.map(this.ratingArray, element => {
        if (element.status == true) {
          if (element.name == '1') {

            data = _.filter(this.resultObject, elements => {
              return elements.rating > 0 && elements.rating < 2
            })
            ////console.log(data)
            this.selectedRatingArray = _.union(this.selectedRatingArray, data)
          }
          if (element.name == '2') {

            data = _.filter(this.resultObject, elements => {
              return elements.rating >= 2 && elements.rating < 3
            })
            ////console.log(data)
            this.selectedRatingArray = _.union(this.selectedRatingArray, data)
          }
          if (element.name == '3') {

            data = _.filter(this.resultObject, elements => {
              return elements.rating >= 3 && elements.rating < 4
            })
            ////console.log(data)
            this.selectedRatingArray = _.union(this.selectedRatingArray, data)
          }
          if (element.name == '4') {


            data = _.filter(this.resultObject, elements => {
              return elements.rating >= 4 && elements.rating < 5
            })
            ////console.log(data)
            this.selectedRatingArray = _.union(this.selectedRatingArray, data)
          }

          if (element.name == '5') {

            data = _.filter(this.resultObject, elements => {
              return elements.rating >= 5 && elements.rating < 6
            })
            ////console.log(data)
            this.selectedRatingArray = _.union(this.selectedRatingArray, data)
          }
        }
      })

      if (this.resultObject.length <= 0 && this.selectedRatingArray.length > 0) {
        this.resultObject.push(this.selectedRatingArray)
        this.resultObject = _.flatten(this.resultObject)
        console.log(this.resultObject)
      }
      else if (this.resultObject.length > 0 && this.selectedRatingArray.length > 0) {
        this.resultObject = _.intersection(this.resultObject, this.selectedRatingArray)
        console.log(this.resultObject)
      }

      //   // //console.log(_.flatten(this.resultObject))

    }
  }

  reset() {
    this.resultObject = this.productDetails1;

    _.map(this.categories, element => {
      element.status = false
    })
    _.map(this.newBrandes, element => {
      element.status = false
    })
    _.map(this.discountArray, element => {
      element.status = false
    })
    _.map(this.ratingArray, element => {
      element.status = false
    })
    _.map(this.priceArray, element => {
      element.status = false
    })
    // this.ngOnInit()
    // 
    this.resultObject = this.productDetails1;

    console.log(this.resultObject)

  }

}
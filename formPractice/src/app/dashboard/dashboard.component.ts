import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsService } from '../products.service';

import _, { isEmpty } from "underscore"

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, ProductDetailsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnChanges {

  public array1: any[] | void = []
  public array2: any[] | void = []
  public array3: any[] | void = []

  categorysIdsArray: any[] = []
  brandsIdsArray: any[] = []
  discountIdsArray: any[] = []
  ratingIdsArray: any[] = []
  priceIdsArray: any[] = []

  @Input() public productobject: any

  @Input() public categoryArray: any[] = []
  @Input() public brandArray: any[] = []
  @Input() public discountArray: any[] = []
  @Input() public ratingArray: any[] = []
  @Input() public priceArray: any[] = []

  @Input() public allselectedValues: any

  @Input('GETDATA') public filterStatus: boolean = false

  @Input() public serachValue: any

  searchdataArray: any = [];

  btnState: boolean = false
  productArray = [];
  public addToCartProductArray: any = []
  loading = false

  dashboradVisibility = true;
  constructor() { }

  ngOnInit(): void {

    this.searchdataArray = _.shuffle(this.productobject)
    // //console.log(this.productArray)


    // if (this.categoryArray.length < 0 && this.brandArray.length < 0 && this.discountArray.length < 0 && this.ratingArray.length < 0 && this.priceArray.length < 0) {
    //   setInterval(() => {
    //     this.loading = true
    //   }, 1000)
    //   this.loading = false
    // }

  }
  ngOnChanges(changes: SimpleChanges): void {


    // this.priceArray = _.pluck(this.priceArray, 'id')
    // //console.log(this.priceArray)

    // console.log(this.categoryArray, this.brandArray, this.discountArray, this.ratingArray, this.priceArray)


    // // //console.log(_.union(
    // //   this.categoryArray
    // //   , this.brandArray
    // //   , this.discountArray
    // //   , this.ratingArray
    // //   , this.priceArray))

    // if (this.categoryArray.length > 0) {
    //   this.categorysIdsArray = _.map(this.productobject, Products => {
    //     // //console.log(this.categoryArray, Products.category);

    //     return (_.contains(this.categoryArray, Products.category)) ? Products.id : null
    //   })
    //   // //console.log(this.categorysIdsArray, "categoryArryIds")
    // }
    // if (this.brandArray.length > 0) {
    //   this.brandsIdsArray = _.map(this.productobject, brand => {
    //     return (_.contains(this.brandArray, brand.brand)) ? brand.id : null
    //   })
    //   // //console.log(this.brandsIdsArray, "brandArryIds")
    // }

    // // if (this.discountArray.length > 0) {
    // //   this.discountIdsArray = _.map(this.productobject, discount => {
    // //     return (_.contains(this.categoryArray, discount.category)) ? discount.id : null
    // //  63 })
    // //   //console.log(this.discountIdsArray)
    // // }

    // if (this.ratingArray.length > 0) {
    //   this.ratingIdsArray = _.map(this.productobject, rating => {
    //     return (_.contains(this.ratingArray, rating.rating)) ? rating.id : null
    //   })
    //   // //console.log(this.ratingIdsArray, "ratingsArryIds")
    // }

    // if (this.priceArray.length > 0) {
    //   this.priceIdsArray = _.map(this.productobject, price => {
    //     //console.log(price.id, this.priceArray)
    //     return (_.contains(this.priceArray, price.id)) ? price.id : null
    //   })
    //   //console.log(this.priceIdsArray, "priceArryIds")
    // }

    //console.log((this.categorysIdsArray.length > 1) ? this.categorysIdsArray : "")
    //console.log(_.intersection((this.categorysIdsArray.length > 0) ? this.categorysIdsArray : [-1], this.brandsIdsArray.length > 0 ?this.brandsIdsArray : [-1], this.ratingIdsArray.length > 0 ? this.ratingIdsArray : [-1], this.priceIdsArray.length > 0 ? this.priceIdsArray : [-1]), "intersection")

    //console.log((this.categorysIdsArray.length > 0) ? this.categorysIdsArray : -1);

    // this.array1 = (this.categorysIdsArray.length > 0) ? this.categorysIdsArray : [-1]
    // this.array2 = (this.priceIdsArray.length > 0) ? this.categorysIdsArray : [-1]
    // this.array3 = (this.brandsIdsArray.length > 0) ? this.categorysIdsArray : [-1]

    //console.log(_.intersection(this.array1, this.array2, this.array3))

    // //console.log(_.intersection((this.categorysIdsArray.length > 0) ? this.categorysIdsArray : [-1], (this.priceIdsArray.length > 0) ? this.priceIdsArray : [-1]), "intersection")
    // //console.log(_.intersection([1, 2], [2, 3],[]);
    // //console.log(_.extend([1, 2], [2, 3]));
    // //console.log(_.difference([1, 2], [2, 3]));


    // if (this.filterStatus = !this.filterStatus)
    this.searchdataArray = _.filter(this.productobject, ids => {
      // //console.log(ids.id, _.intersection(this.categorysIdsArray, this.brandsIdsArray, this.ratingIdsArray, this.priceIdsArray))
      return (_.contains((_.intersection(this.categorysIdsArray, this.brandsIdsArray, this.ratingIdsArray, this.priceIdsArray)), ids.id))
    })

    //console.log(this.searchdataArray)


    if (this.serachValue != "") {
      this.searchdataArray = _.filter(this.productobject, Products => {
        return Products.title.toLowerCase().includes(this.serachValue)
      })
    }
    else {
      this.searchdataArray = this.productobject
    }


  }
  onClick(product: any, i: number) {
    this.addToCartProductArray.push(product)
    this.btnState = !this.btnState;
  }
  hideDashborad(event: boolean) {
    // this.dashboardVisibility = true
    this.dashboradVisibility = event
  }

  show_dashborad(event: any) {
    this.dashboradVisibility = event

  }
}



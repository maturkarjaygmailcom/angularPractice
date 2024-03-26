import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { routingComponent } from '../app.routes';
import { DashboardComponent } from '../dashboard/dashboard.component';
import _, { indexOf } from "underscore"
import { log } from 'console';
import { producerUpdateValueVersion } from '@angular/core/primitives/signals';
import { stringify } from 'querystring';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, routingComponent, DashboardComponent],
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

  categories: any
  brandes: any
  discount: any
  discountPercentages: any
  ratinges: any
  prices: any

  visiableCategoryData: string[] = []
  visiableBrandData = []
  visiableDiscountData = []
  visiableDiscountpercentageData = []
  visiableRatingData = []
  visiablePriceData = []

  result: any[] = [];
  ngOnInit(): void {
    this.VisibalityCategory = false;
    this.VisibalityBrand = false;
    this.VisibalityDiscount = false;
    this.VisibalityRanting = false;
    this.VisibalityPrice = false;
    this.categories = _.uniq(_.pluck(this.productDetails, 'category'))
    this.brandes = _.uniq(_.pluck(this.productDetails, 'brand'))
    this.discountPercentages = _.uniq(_.pluck(this.productDetails, 'discountPercentage'))
    this.ratinges = _.uniq(_.pluck(this.productDetails, 'rating'))
    this.prices = _.uniq(_.pluck(this.productDetails, 'price'))

    this.result = this.productDetails;

  }
  showCategory() {
    this.VisibalityCategory = (!this.VisibalityCategory);
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
    // console.log(this.brandes, this.VisibalityBrand,this.VisibalityDiscount,
    //   this.VisibalityRanting,
    //   this.VisibalityPrice);

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
  onChange(event: any, index: any) {

    let checked: string = event.target.value
    if (_.contains(this.categories, checked) && !_.contains(this.visiableCategoryData, checked))
      this.visiableCategoryData.push(checked)

    else if (_.contains(this.visiableCategoryData, checked))
      this.visiableCategoryData.splice(this.visiableCategoryData.indexOf(checked), 1)

    console.log(this.visiableCategoryData)

    this.result = _.filter(this.productDetails, elements => {
      return _.contains(this.visiableCategoryData, elements.category)
    })

    console.log(this.result);

    if(this.visiableCategoryData.length<1){
      this.result = this.productDetails;

    }
  }



}

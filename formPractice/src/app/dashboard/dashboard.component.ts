import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsService } from '../products.service';

import _ from "underscore"

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, ProductDetailsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnChanges {

  @Input() public productobject: any
  @Input() public categoryArray: string[] = []
  @Input() public brandArray: string[] = []
  @Input() public discountArray: string[] = []
  @Input() public ratingArray: string[] = []
  @Input() public priceArray: string[] = []
  @Input() public allselectedValues: any

  @Input() public serachValue: any

  searchdataArray: any = [];

  btnState: boolean = false
  productArray = [];
  public addToCartProductArray: any = []

  dashboradVisibility = true;
  constructor() { }

  ngOnInit(): void {

    this.searchdataArray = _.shuffle(this.productobject)
    // console.log(this.productArray)
  }
  ngOnChanges(changes: SimpleChanges): void {

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



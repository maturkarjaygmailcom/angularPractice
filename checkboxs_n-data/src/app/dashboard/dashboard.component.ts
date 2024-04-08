import { CommonModule } from '@angular/common';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component, Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { elementAt } from 'rxjs';
import { __makeTemplateObject } from 'tslib';
import _, { result } from 'underscore';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnChanges {
  @Input('PRODUCT_ARRAY') public products: any[] = []
  @Input('SEND_TO_CHILD') public show: boolean = false

  @Input('SELECTEDCATEGORY') public category: any[] = []
  @Input('SELECTEDBRAND') public brand: any[] = []
  @Input('SELECTEDDISCOUNT') public discount: any[] = []
  @Input('SELECTEDRATING') public rating: any[] = []
  @Input('SELECTEDPRICE') public price: any[] = []

  result: any[] = []
  finalResult: any[] = []
  categoryResult: any[] = []
  brandResult: any[] = []
  discountResult: any[] = []
  ratingResult: any[] = []
  priceResult: any[] = []

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.category)


    // if (this.category.length > 0 || this.brand.length <= 0 || this.discount.length <= 0 || this.rating.length <= 0 || this.price.length <= 0) {

    if (this.category.length > 0) {
      this.categoryResult = _.map(this.products, element => {
        return (_.contains(this.category, element.category)) ? element.id : null
      })
    }

    if (this.brand.length > 0) {
      this.brandResult = _.map(this.products, element => {
        return (_.contains(this.brand, element.brand)) ? element.id : null
      })

    }
    if (this.discount.length > 0) {

      this.discountResult = _.map(this.products, (element) => {
        // console.log((_.pluck(this.discount, 'discountPercentage'), element.discountPercentage));
        return (_.contains(_.pluck(this.discount, 'discountPercentage'), element.discountPercentage)) ? element.id : null
      })

    }
    if (this.rating.length > 0) {
      this.ratingResult = _.map(this.products, element => {
        return (_.contains(this.rating, element.rating)) ? element.id : null
      })
    }
    if (this.price.length > 0) {
      this.priceResult = _.map(this.products, element => {
        // console.log(_.pluck(this.price, 'price'), element.price)
        return (_.contains(_.pluck(this.price, 'price'), element.price)) ? element.id : null
      })
    }

    console.log(this.priceResult, this.categoryResult)
    if (this.category.length > 0) {

      if (this.category.length > 0 && this.brand.length <= 0 && this.discount.length <= 0 && this.rating.length <= 0 && this.price.length <= 0) {
        this.result = this.categoryResult;
      }
      if (this.category.length > 0 && this.brand.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult)
      }
      if (this.category.length > 0 && this.discount.length > 0) {
        this.result = _.intersection(this.categoryResult, this.discountResult)
      }
      if (this.category.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.ratingResult)
      }
      if (this.category.length > 0 && (this.price.length > 0)) {
        console.log(this.categoryResult, this.category, this.priceResult);

        this.result = _.intersection(this.categoryResult, this.priceResult)

      }
      if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult)
      }
      if (this.category.length > 0 && this.brand.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brand, this.rating)
      } if (this.category.length > 0 && this.brand.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.priceResult)
      }
      if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.ratingResult)
      } if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.priceResult)
      } if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.rating.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.ratingResult, this.priceResult)
      }
      console.log(this.result)
    }

    if (this.brand.length > 0) {
      if (this.category.length <= 0 && this.brand.length > 0 && this.discount.length <= 0 && this.rating.length <= 0 && this.price.length <= 0) {
        this.result = this.brandResult;
      }
      if (this.category.length > 0 && this.brand.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult)
      }
      if (this.brand.length > 0 && this.discount.length > 0) {
        this.result = _.intersection(this.brandResult, this.discountResult)
      }
      if (this.brand.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.brandResult, this.ratingResult)
      }
      if (this.brand.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.brandResult, this.priceResult)
        console.log(this.result)
      }
      if (this.brand.length > 0 && this.category.length > 0 && this.discount.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult)
      }
      if (this.category.length > 0 && this.brand.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brand, this.rating)
      } if (this.category.length > 0 && this.brand.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.priceResult)
      }
      if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.ratingResult)
      }
      if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.priceResult)
      }
      if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.rating.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.ratingResult, this.priceResult)
      }
      console.log(this.result)
    }

    if (this.discount.length > 0) {
      if (this.category.length <= 0 && this.brand.length <= 0 && this.discount.length > 0 && this.rating.length <= 0 && this.price.length <= 0) {
        this.result = this.discountResult;
      }
      if (this.discount.length > 0 && this.category.length > 0) {
        this.result = _.intersection(this.categoryResult, this.discountResult)
      }
      if (this.discount.length > 0 && this.brand.length > 0) {
        this.result = _.intersection(this.discountResult, this.brandResult)
      }

      if (this.discount.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.discountResult, this.ratingResult)
      }
      if (this.discount.length > 0 && this.price.length > 0) {
        console.log(this.discountResult, this.priceResult)
        console.log(_.pluck(this.discountResult, 'id'), _.pluck(this.priceResult, 'id'));

        this.result = _.intersection(_.pluck(this.discountResult, 'id'), _.pluck(this.priceResult, 'id'))
      }

      if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult)
      }
      if (this.category.length > 0 && this.discount.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.discountResult, this.rating)
      }

      if (this.category.length > 0 && this.discount.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.discountResult, this.priceResult)
      }

      if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.ratingResult)
      }

      if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.priceResult)
      }

      if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.price.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.priceResult, this.ratingResult)
      }
      console.log(this.result)

    }

    if (this.rating.length > 0) {
      if (this.category.length <= 0 && this.brand.length <= 0 && this.discount.length <= 0 && this.rating.length > 0 && this.price.length <= 0) {
        this.result = this.ratingResult;
      }
      if (this.category.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult)
      }
      if (this.brand.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.discountResult)
      }
      if (this.discount.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.ratingResult)
      }
      if (this.rating.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.priceResult)
      }

      if (this.category.length > 0 && this.brand.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brand, this.rating)
      }

      if (this.category.length > 0 && this.rating.length > 0 && this.discount.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult)
      }

      if (this.category.length > 0 && this.discount.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.priceResult)
      }
      if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.ratingResult)
      }

      if (this.category.length > 0 && this.brand.length > 0 && this.rating.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.priceResult)
      }
      if (this.category.length > 0 && this.rating.length > 0 && this.discount.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.priceResult)
      }

      if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.price.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.priceResult, this.ratingResult)
      }
      console.log(this.result)

    }

    console.log(this.price.length);

    if (this.price.length > 0) {

      if (this.category.length <= 0 && this.brand.length <= 0 && this.discount.length <= 0 && this.rating.length <= 0 && this.price.length > 0) {
        this.result = this.priceResult;
        // this.result = _.pluck(this.priceResult, 'id');
        console.log(this.priceResult);
      }
      // if (this.price.length > 0) {
      // console.log(this.result);
      // // console.log(this.price)
      // }

      console.log(this.result);

      if (this.category.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.priceResult)
        console.log(this.result)
      }
      if (this.price.length > 0 && this.brand.length > 0) {
        this.result = _.intersection(this.priceResult, this.brandResult)
        console.log(this.result)
      }
      if (this.price.length > 0 && this.discount.length > 0) {
        console.log(this.result);
        console.log(_.pluck(this.priceResult, 'id'), _.pluck(this.discountResult, 'id'));

        this.result = _.intersection(this.priceResult, this.discountResult)
        // this.result = _.intersection(_.pluck(this.priceResult, 'id'), _.pluck(this.discountResult, 'id'))
        console.log(this.result);

      }
      if (this.price.length > 0 && this.rating.length > 0) {
        this.result = _.intersection(this.priceResult, this.ratingResult)
        console.log(this.result)
      }

      if (this.category.length > 0 && this.brand.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.priceResult)
        console.log(this.result)
      }
      if (this.category.length > 0 && this.price.length > 0 && this.discount.length > 0) {
        this.result = _.intersection(this.categoryResult, this.priceResult, this.discountResult)
        console.log(this.result)
      }
      if (this.brand.length > 0 && this.price.length > 0 && this.discount.length > 0) {
        this.result = _.intersection(this.brandResult, this.priceResult, this.discountResult)
        console.log(this.result)
      }

      if (this.category.length > 0 && this.discount.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.discountResult, this.priceResult)
        console.log(this.result)
      }
      if (this.category.length > 0 && this.rating.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.ratingResult, this.priceResult)
        console.log(this.result)
      }
      if (this.discount.length > 0 && this.rating.length > 0 && this.price.length > 0) {
        console.log(this.discountResult, this.ratingResult, this.priceResult);
        this.result = _.intersection(this.discountResult, this.ratingResult, this.priceResult)
        console.log(this.result)
      }
      if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.priceResult)
        console.log(this.result)
      }
      if (this.category.length > 0 && this.brand.length > 0 && this.rating.length > 0 && this.price.length > 0) {
        this.result = _.intersection(this.categoryResult, this.brandResult, this.ratingResult, this.priceResult)
        console.log(this.result)

      }

      // if (this.category.length > 0 && this.brand.length > 0 && this.rating.length > 0 && this.price.length > 0, this.discount.length > 0) {
      //   this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.priceResult, this.ratingResult)
      //   console.log(this.result)

      // }
      console.log(this.result)
    }

    console.log(this.price.length)
    if (this.category.length <= 0 && this.brand.length <= 0 && this.discount.length <= 0 && this.rating.length <= 0 && this.price.length <= 0) {
      this.result = _.pluck(this.products, 'id')

      this.finalResult = _.filter(this.products, element => {
        return _.contains(this.result, element.id)
      })
      console.log(this.finalResult)
    }

    if (this.category.length > 0 || this.brand.length > 0 || this.discount.length > 0 || this.rating.length > 0 || this.price.length > 0) {
      console.log(this.result);
      
      this.finalResult = _.filter(this.products, element => {
        return _.contains(this.result, element.id)

      })
      console.log(this.finalResult);

    }
    // this.result = this.products
    console.log(this.finalResult);
  }





  onClick(product: any, index: number) {

  }
}

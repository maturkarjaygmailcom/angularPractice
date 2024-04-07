import { Component, Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { elementAt } from 'rxjs';
import { __makeTemplateObject } from 'tslib';
import _, { result } from 'underscore';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
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
  categoryResult: any[] = []
  brandResult: any[] = []
  discountResult: any[] = []
  ratingResult: any[] = []
  priceResult: any[] = []

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.category)


    // if (this.category.length > 0 || this.brand.length <= 0 || this.discount.length <= 0 || this.rating.length <= 0 || this.price.length <= 0) {

    if (this.category.length > 0) {
      this.categoryResult = _.filter(this.products, element => {
        return (_.contains(this.category, element.category))
      })
    }

    if (this.brand.length > 0) {
      this.brandResult = _.filter(this.products, element => {
        return (_.contains(this.brand, element.brand))
      })


      if (this.discount.length > 0) {

        this.discountResult = _.filter(this.products, (element) => {
          console.log((_.pluck(this.discount, 'discountPercentage'), element.discountPercentage));

          return (_.contains(_.pluck(this.discount, 'discountPercentage'), element.discountPercentage))
        })

      }
      if (this.rating.length > 0) {
        this.ratingResult = _.filter(this.products, element => {
          return (_.contains(this.rating, element.rating))
        })
      }
      if (this.price.length > 0) {
        this.priceResult = _.filter(this.products, element => {
          console.log(_.pluck(this.price, 'price'), element.price)
          return (_.contains(_.pluck(this.price, 'price'), element.price))
        })
      }

      if (this.category.length > 0) {
        this.result = this.products;
        if (this.category.length > 0 && this.brand.length > 0) {
          this.result = _.intersection(this.categoryResult, this.brandResult)
        }
        if (this.category.length > 0 && this.discount.length > 0) {
          this.result = _.intersection(this.categoryResult, this.discountResult)
        }
        if (this.category.length > 0 && this.rating.length > 0) {
          this.result = _.intersection(this.categoryResult, this.ratingResult)
        }
        if (this.category.length > 0 && this.price.length > 0) {
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
        this.result = this.products;
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
        this.result = this.products;
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
          this.result = _.intersection(this.discountResult, this.priceResult)
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
        this.result = this.products;
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

      if (this.price.length > 0) {
        this.result = this.products;
        if (this.category.length > 0 && this.price.length > 0) {
          this.result = _.intersection(this.categoryResult, this.priceResult)
        }
        if (this.price.length > 0 && this.brand.length > 0) {
          this.result = _.intersection(this.priceResult, this.brandResult)
          console.log(this.result)
        }
        if (this.price.length > 0 && this.discount.length > 0) {
          this.result = _.intersection(this.priceResult, this.discountResult)
        }
        if (this.price.length > 0 && this.rating.length > 0) {
          this.result = _.intersection(this.priceResult, this.ratingResult)
        }

        if (this.category.length > 0 && this.brand.length > 0 && this.price.length > 0) {
          this.result = _.intersection(this.categoryResult, this.brandResult, this.priceResult)
        }
        if (this.category.length > 0 && this.price.length > 0 && this.discount.length > 0) {
          this.result = _.intersection(this.categoryResult, this.priceResult, this.discountResult)
        }
        if (this.brand.length > 0 && this.price.length > 0 && this.discount.length > 0) {
          this.result = _.intersection(this.brandResult, this.priceResult, this.discountResult)
        }

        if (this.category.length > 0 && this.discount.length > 0 && this.price.length > 0) {
          this.result = _.intersection(this.categoryResult, this.discountResult, this.priceResult)
        }
        if (this.category.length > 0 && this.rating.length > 0 && this.price.length > 0) {
          this.result = _.intersection(this.categoryResult, this.ratingResult, this.priceResult)
        }
        if (this.discount.length > 0 && this.rating.length > 0 && this.price.length > 0) {
          this.result = _.intersection(this.discountResult, this.ratingResult, this.priceResult)
        }
        if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.price.length > 0) {
          this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.priceResult)
        }
        if (this.category.length > 0 && this.brand.length > 0 && this.rating.length > 0 && this.price.length > 0) {
          this.result = _.intersection(this.categoryResult, this.brandResult, this.ratingResult, this.priceResult)
        }

        if (this.category.length > 0 && this.brand.length > 0 && this.rating.length > 0 && this.price.length > 0, this.discount.length > 0) {
          this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.priceResult, this.ratingResult)
        }
        console.log(this.result)
      }
      // if (this.category.length > 0 && this.brand.length > 0 && this.discount.length > 0 && this.price.length > 0 && this.rating.length > 0) {
      //   this.result = _.intersection(this.categoryResult, this.brandResult, this.discountResult, this.priceResult,this.ratingResult)
      // }
      // }




      // if (this.category.length > 0) {
      //   //  && this.brand.length <= 0 && this.discount.length <= 0 && this.rating.length <= 0 && this.price.length <= 0
      //   // ) {
      //   this.result = _.filter(this.products, element => {
      //     return (_.contains(this.category, element.category))
      //   })
      //   console.log("asasjhgjhgjh", this.discount.length);

      //   if (this.brand.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(this.brand, element.brand))
      //     })
      //     // console.log(this.brand);
      //   }

      //   if (this.discount.length > 0) {
      //     console.log("aaaaaaa", this.discount.length);

      //     this.result = _.filter(this.result, (element) => {
      //       console.log((_.pluck(this.discount, 'discountPercentage'), element.discountPercentage));

      //       return (_.contains(_.pluck(this.discount, 'discountPercentage'), element.discountPercentage))
      //     })

      //   }
      //   if (this.rating.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(this.rating, element.rating))
      //     })
      //   }
      //   if (this.price.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       console.log(_.pluck(this.price, 'price'), element.price)
      //       return (_.contains(_.pluck(this.price, 'price'), element.price))
      //     })
      //   }

      // }

      // if (this.brand.length > 0)
      // // && this.category.length <= 0 && this.discount.length <= 0 && this.rating.length <= 0 && this.price.length <= 0) 
      // {

      //   this.result = _.filter(this.products, element => {
      //     return (_.contains(this.brand, element.brand))
      //   })
      //   // console.log(this.brand);

      //   if (this.category.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(this.category, element.category))
      //     })
      //   }

      //   if (this.discount.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(_.pluck(this.discount, 'discountPercentage'), element.discountPercentage))
      //     })
      //   }
      //   if (this.rating.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(this.rating, element.rating))
      //     })
      //   }
      //   if (this.price.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(_.pluck(this.price, 'price'), element.price))
      //     })
      //   }

      // }

      // if (this.discount.length > 0)
      // //  && this.category.length <= 0 && this.brand.length <= 0 && this.rating.length <= 0 && this.price.length <= 0)
      // {
      //   this.result = _.filter(this.products, element => {
      //     return (_.contains(_.pluck(this.discount, 'discountPercentage'), element.discountPercentage))
      //   })
      //   // console.log(this.brand);

      //   if (this.category.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(this.category, element.category))
      //     })
      //   }

      //   if (this.brand.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(this.brand, element.brand))
      //     })
      //   }
      //   if (this.rating.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(this.rating, element.rating))
      //     })
      //   }
      //   if (this.price.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(this.price, element.price))
      //     })
      //   }

      // }

      // if (this.rating.length > 0)
      // //  && this.category.length <= 0 && this.discount.length <= 0 && this.brand.length <= 0 && this.price.length <= 0)
      // {
      //   this.result = _.filter(this.products, element => {
      //     return (_.contains(this.rating, element.rating))
      //   })
      //   // console.log(this.brand);

      //   if (this.category.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(this.category, element.category))
      //     })
      //   }

      //   if (this.brand.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(this.brand, element.brand))
      //     })
      //   }
      //   if (this.discount.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(_.pluck(this.discount, 'discountPercentage'), element.discountPercentage))
      //     })
      //   }
      //   if (this.price.length > 0) {
      //     this.result = _.filter(this.result, element => {
      //       return (_.contains(_.pluck(this.price, 'price'), element.price))
      //     })
      //   }

      // }

      // if (this.price.length > 0)
      // // || this.category.length <= 0 || this.discount.length <= 0 || this.rating.length <= 0 || this.brand.length <= 0) 
      // {
      //   this.priceResult = _.filter(this.products, element => {
      //     return (_.contains(_.pluck(this.price, 'price'), element.price))
      //   })
      //   // console.log(this.brand);

      //   if (this.category.length > 0 && this.price.length > 0) {
      //     this.priceResult = _.filter(this.priceResult, element => {
      //       return (_.contains(this.category, element.category))
      //     })
      //   }

      //   if (this.brand.length > 0 && this.price.length > 0) {
      //     this.priceResult = _.filter(this.priceResult, element => {
      //       return (_.contains(this.brand, element.brand))
      //     })
      //   }
      //   if (this.rating.length > 0 && this.price.length > 0) {
      //     this.priceResult = _.filter(this.priceResult, element => {
      //       return (_.contains(this.rating, element.rating))
      //     })
      //   }
      //   if (this.discount.length > 0 && this.price.length > 0) {
      //     this.priceResult = _.filter(this.priceResult, element => {
      //       return (_.contains(_.pluck(this.discount, 'discountPercentage'), element.discountPercentage))
      //     })
      //   }

      // }

      // if (this.category.length > 0 || this.categoryResult.length > 0) { this.result = this.categoryResult }
      // // if (this.brand.length > 0) { this.result = this.brandResult }
      // // if (this.discount.length > 0) { this.result = this.discountResult }
      // // if (this.rating.length > 0) { this.result = this.ratingResult }
      // if (this.price.length > 0 || this.priceResult.length > 0) { this.result = this.priceResult }

      if (this.category.length <= 0 && this.brand.length <= 0 && this.discount.length <= 0 && this.rating.length <= 0 && this.price.length <= 0) {
        this.result = this.products
      }
      console.log(this.result);

    }
  }

  onClick(product: any, index: number){
    
  }
}

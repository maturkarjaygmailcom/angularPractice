import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import _ from "underscore"

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnChanges {
  @Input() addedProduct: any = [];
  newArray: any = []
  ngOnInIt() {
    console.log()
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.addedProduct)
    let data = _.uniq(this.addedProduct)
    let aa = _.difference(this.addedProduct, data)
    console.log(aa)
    // this.newArray.push(data)
    // console.log(this.newArray)
    console.log(data)
    // console.log(this.addedProduct)

    // _.each(this.addedProduct, (elem, i) => {
    //   let id = elem.id
    //   console.log(elem)

    //   if (id == elem[i + 1]) {
    //     console.log('yes')
    //   }
    //   else{
    //     console.log("no");

    //   }
    // })
  }


}

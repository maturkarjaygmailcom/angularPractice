import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  @Input() public allselectedValues:any

  productArray = [];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.productArray)
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
    // console.log(this.productArray);
    // console.log(this.categoryArray);

    // console.log(this.allselectedValues);
    

  }

}

import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import _ from "underscore"
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnChanges {

  cities: any[] = [];

  selectedCity: any[] = [];


  dept = [{ 'did': 11, 'dname': "hr" }, { 'did': 14, 'dname': "acounting" }, { 'did': 12, 'dname': "marketing" },]
  ddprt = [{ 'did': '' }, { 'did': '12,11' }, { 'did': '' },]

  public arr: any[] = []
  public derptarr: any[] = []

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedCity);
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];


    _.each(this.dept, (deptElement: any) => {

      _.each(this.ddprt, (ele: any) => {
        if (ele.did != "") {
          this.arr = ele.did.split(",").map(Number);

          // console.log(_.contains(this.arr, deptElement.did))
          if (_.contains(this.arr, deptElement.did)) {
            console.log(this.arr, deptElement.did)
            // console.log(deptElement.dname);
            ele['derptarr'] = deptElement.dname
          }
        }

      })
    })
    console.log(this.dept);


  }
  fun1(e: any) {
    console.log(this.selectedCity, e);

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedCity);

  }



}

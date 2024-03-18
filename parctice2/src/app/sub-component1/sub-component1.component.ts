
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { json } from 'stream/consumers';
@Component({
  selector: 'app-sub-component1',
  standalone: true,
  imports: [CommonModule, FormsModule, AppComponent],
  templateUrl: './sub-component1.component.html',
  styleUrl: './sub-component1.component.css'
})
export class SubComponent1Component implements OnChanges {
  @Input() userName: string = ""
  @Input() output: any = {}

  citys: string[] = ["surat", "navsari", "valsad", "dadar"]
  states: string[] = ["gujarat", "Maharashtra"]

  address1: string = "";
  address2: string = "";
  selectedCity: string = "surat";
  selectedState: string = "gujarat";
  fullAddess: string = ""
  showPushData = false;
  // outputVisble: boolean = false;

  @Input('OBJ') public obj: any;
  @Output() passingObjectToAppCom = new EventEmitter()
  @Output() dataPushCheck = new EventEmitter()
  showModifyData = false;

  objArray: any = []

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    for (let data in changes) {
      let prop = changes[data]
      console.log(JSON.stringify(prop.currentValue))
      console.log(JSON.stringify(prop.previousValue))
    }
  }
  save() {

    this.objArray = [];
    this.fullAddess = this.address1 + " , " + this.address2 + " , " + this.obj.city + " , " + this.selectedState + ".";
    // console.log(this.obj.city)
    this.obj['address'] = this.fullAddess

    this.objArray.push(this.obj)
    console.log(this.objArray);


    this.showModifyData = true
    // this.dataPushCheck.emit(this.showModifyData);

    // this.passingObjectToAppCom.emit(this.objArray);



  }

  pushtomainobj() {

    console.log("aaaaaaa")
    this.objArray = [];
    this.fullAddess = this.address1 + " , " + this.address2 + " , " + this.obj.city + " , " + this.selectedState + ".";
    // console.log(this.obj.city)
    this.obj['address'] = this.fullAddess

    this.objArray.push(this.obj)
    console.log(this.objArray);


    this.showModifyData = true
    this.showPushData = true
    this.dataPushCheck.emit(this.showModifyData);

    this.passingObjectToAppCom.emit(this.objArray);
  }


}

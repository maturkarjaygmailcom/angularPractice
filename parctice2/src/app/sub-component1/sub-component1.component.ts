
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sub-component1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sub-component1.component.html',
  styleUrl: './sub-component1.component.css'
})
export class SubComponent1Component {
  @Input() userName: string = ""
  citys: string[] = ["surat", "navsari", "valsad", "dadar"]
  states: string[] = ["gujarat", "Maharashtra"]

  address1: string = "";
  address2: string = "";
  selectedCity: string = "surat";
  selectedState: string = "gujarat";
  fullAddess: string = ""

  // outputVisble: boolean = false;

  @Input('OBJ') public obj: any;
  @Output() passingObjectToAppCom = new EventEmitter()
  @Output() dataPushCheck = new EventEmitter()
  showModifyData = false;

  objArray: any = []

  save() {

    this.objArray = [];
    this.fullAddess = this.address1 + " , " + this.address2 + " , " + this.obj.city + " , " + this.selectedState + ".";
    console.log(this.obj.city)
    this.obj['address'] = this.fullAddess

    this.objArray.push(this.obj)
    console.log(this.objArray);


    this.showModifyData = true
    this.dataPushCheck.emit(this.showModifyData);

    this.passingObjectToAppCom.emit(this.objArray);



  }


}

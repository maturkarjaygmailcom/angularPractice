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
  citys: string[] = ["surat", "navasri", "valsad", "dadar", "New Delhi"]
  states: string[] = ["gujarat", "Maharashtra", "delhi"]

  address1: string = "";
  address2: string = "";
  selectedCity: string = "surat";
  selectedState: string = "gujarat";
  fullAddess: string = ""
  outputVisble: boolean = false;

  @Input() public obj: any;
  @Output() passingObjectToAppCom = new EventEmitter()

  showPushBtn=false;
  getCity(city: string) {
    console.log(city)
  }

  pushData() {
    this.fullAddess = this.address1 + " , " + this.address2 + " , " + this.obj.city + " , " + this.selectedState + ".";
    console.log(this.fullAddess)

    this.obj['address'] = this.fullAddess

    this.showPushBtn=true
    console.log(this.obj);
    this.passingObjectToAppCom.emit(this.obj);
    
  }
  showPushData(){
    this.outputVisble = true;
  }


}

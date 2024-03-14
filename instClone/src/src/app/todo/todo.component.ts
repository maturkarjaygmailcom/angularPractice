import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmpCarsService } from '../emp-cars.service';
import { LifeCycleComponent } from '../life-cycle/life-cycle.component';
import _ from "underscore";
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule, LifeCycleComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit, OnChanges {
  @Input() public empName: string = "";
  public empData: any = [];
  public department: string = "";
  public requestCarList: string[] = []
  public CarListName: string[] = []
  statment: boolean=false;

  constructor(private _empCars: EmpCarsService) { }

  ngOnInit() {
    this.empData = this._empCars.getData();
  }

  ngOnChanges(): void {
    let name: string = this.empName

    console.log(name)
    console.log(this.empName)
    // console.log(changes)

    const empdata = this.empData;
    const data = empdata[0]
    // console.log(data)

    let department_data = data.department_data
    let user_name = "";
    let department_name = "";

    let d = _.pluck(data.user_list, 'user_name');
    // console.log(d)
    // console.log(_.contains(d, this.empName))

    if (_.contains(d, this.empName)) {
      _.each(data.user_list, (user_listElem: any) => {
        if (user_listElem.user_name == name) {
          this.empName = user_listElem.user_name

          //for dept
          _.each(department_data.department_master, (department_dataEle: any) => {

            if (user_listElem.department_code == department_dataEle.department_code) {
              this.department = department_dataEle.department_name
            }

          });


          //for dept permission
          _.each(data.department_data.permission_deparment_wise.allowed, (department_dataEle: any) => {


            if (_.contains(department_dataEle.department_code, user_listElem.department_code)) {


              //for cars
              let CarList: string[] = []
              let CarListNameVar: string[] = []
              // if (user_listElem.is_request == true) {
              _.each(data.car_list, (car_listEle: any) => {

                if (_.contains(car_listEle.allowed_user_level, user_listElem.user_level)) {
                  // console.log(car_listEle.name);
                  CarList.push(car_listEle.img)
                  CarListNameVar.push(car_listEle.name)
                }
              });
              this.statment = true;
              this.requestCarList = CarList;
              this.CarListName = CarListNameVar;
              console.log(user_name + " is " + department_name + " allow to use for " + CarList.toString())

            }
            else if (!(_.contains(department_dataEle.department_code, user_listElem.department_code)) && user_listElem.is_request == true) {


              //for userLevel
              let requestCarList: string[] = []
              let CarListNameVar: string[] = []

              _.each(data.car_list, (car_listEle: any) => {
                if (car_listEle.is_request == user_listElem.is_request) {
                  // console.log(car_listEle.name);
                  requestCarList.push(car_listEle.img)
                  CarListNameVar.push(car_listEle.name)
                }
              });
              this.statment = false;
              this.requestCarList = requestCarList;
              this.CarListName = CarListNameVar;

              console.log(user_name + " is " + department_name + " can request for " + requestCarList.toString());

            }

            else {
              console.log(user_name + " is " + department_name + "has no aceess");
              // this.requestCarList.splice(0,this.requestCarList.length);

            }

          });

        }
        else if (user_listElem.user_name !== name) {
          console.log("out of list else if")
          // this.statment = "HAS NO ACCESS"
        }
        else {
          console.log("Name Out Of Org...")

        }
      })
    } else {
      this.requestCarList = []
      this.department = ""
      // this.statment = ""

    }


  }

}


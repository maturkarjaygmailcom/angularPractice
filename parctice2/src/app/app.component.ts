import { Component, OnChanges, SimpleChange, SimpleChanges, input, numberAttribute } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import _ from "underscore"
import { SubComponent1Component } from './sub-component1/sub-component1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, SubComponent1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges {
  public mainData: any = [{
    name: "jay",
    phno: "9825108987",
    city: "surat"
  }, {
    name: "jay",
    phno: "6328756487",
    city: "navsari"
  }, {
    name: "alay",
    phno: "9825108987",
    city: "valsad"
  }, {
    name: "raj",
    phno: "9825108987",
    city: "dadar"
  }, {
    name: "ashish",
    phno: "9825108987",
    city: "valsad"
  }, {
    name: "karan",
    phno: "9825108987",
    city: "surat"
  }]
  serachText: string = "";

  //for pushing data to app compo...
  dataPushCheck: boolean = false;

  showModifyData = false;

  category: any;
  public dataPush: boolean = false

  public datatableFlag: boolean = false
  userNameVisibility = false
  public resulte: any = []
  newName = ""
  newPhno: string = "";
  newCity: string = "";

  modifyName: string[] = [];
  modifyPhno: string[] = [];
  modifyCity: string[] = [];

  nameChangeState: boolean = false;
  phnoChangeState: boolean = false;
  cityChangeState: boolean = false;

  obj1: any;

  updateDataedObjFromChild: any;
  finalOutput: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.dataPush, "kshdkshoidusidui")

  }


  updateMain(event: any) {
    console.log(event)
    if (this.dataPush) {

      _.each(this.mainData, element => {
        _.each(event, childObjectEle => {

          if (element.name == childObjectEle.name) {

            element['Address'] = childObjectEle.address
            element['city'] = childObjectEle.city

            this.finalOutput = element;


          }

        })


      })

    }

  }

  // pushData() {

  //   if (this.dataPush) {

  //     _.each(this.mainData, element => {
  //       _.each(this.updateDataedObjFromChild, childObjectEle => {

  //         if (element.name == childObjectEle.name) {

  //           element['Address'] = childObjectEle.address
  //           element['city'] = childObjectEle.city

  //           this.finalOutput = element;


  //         }

  //       })


  //     })

  //   }
  // }



  searchUser() {
    if (this.category == 'name') {

      this.resulte = _.filter(this.mainData, element => {
        return element.name == this.serachText;
      })

      if (this.resulte.length > 0) {
        this.datatableFlag = true;

        _.each(this.resulte, element => {

          this.modifyName.push(element.name)
          this.modifyPhno.push(element.phno)
          this.modifyCity.push(element.city)
        })

      }
    }

    if (this.category == 'phoneNo') {

      this.resulte = _.filter(this.mainData, element => {
        return element.phno == this.serachText;
      })

      if (this.resulte.length > 0) {
        this.datatableFlag = true;

        _.each(this.resulte, element => {

          this.modifyName.push(element.name)
          this.modifyPhno.push(element.phno)
          this.modifyCity.push(element.city)
        })

      }
    }

    if (this.category == 'city') {

      this.resulte = _.filter(this.mainData, element => {
        return element.city == this.serachText;
      })

      if (this.resulte.length > 0) {
        this.datatableFlag = true;

        _.each(this.resulte, element => {


          this.modifyName.push(element.name)
          this.modifyPhno.push(element.phno)
          this.modifyCity.push(element.city)
        })

      }
    }
  }

  getModifedName(name: string, index: number) {
    this.nameChangeState = true;
    this.modifyName[index] = name

  }
  getModifedPhno(phno: string, index: number) {
    this.phnoChangeState = true;
    this.modifyPhno[index] = phno
  }
  getModifedCity(city: string, index: number) {
    this.cityChangeState = true;
    this.modifyCity[index] = city
  }

  modifyUserDetails(btnIndex: number) {

    if (this.nameChangeState || this.phnoChangeState || this.cityChangeState) {

      this.obj1 = []
      console.log(this.modifyCity, this.modifyName);
      this.obj1 = { name: this.modifyName[btnIndex], phno: this.modifyPhno[btnIndex], city: this.modifyCity[btnIndex] }
      console.log(this.obj1)
      this.userNameVisibility = true;
    }
    else {
      this.userNameVisibility = false;
      window.alert("No Change Found!")

    }
  }

  showUserDetials() {
    this.showModifyData = true
  }
}


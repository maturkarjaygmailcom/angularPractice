import { Component, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
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
export class AppComponent {
  public mainData = [{
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
  name: string = "";

  dataPushCheck=false;
  showModifyData=false;
  category: any;
  dataPush = false;

  public datatableFlag: boolean = false
  userNameVisibility = false
  public resulte: any = []
  newName = ""
  newPhno: string = "";
  newCity: string = "";

  modifyName: string = "";
  modifyPhno: string = "";
  modifyCity: string = "";

  nameChangeState: boolean = false;
  phnoChangeState: boolean = false;
  cityChangeState: boolean = false;

  obj1: any;

  updateDataedObjFromChild: any ;





  searchUser(event: any) {
    console.log(this.category)
    if (this.category == 'name') {

      this.resulte = _.filter(this.mainData, element => {
        return element.name == this.name;
      })

      if (this.resulte.length > 0) {
        this.datatableFlag = true;

        _.each(this.resulte, element => {

          this.modifyName = element.name;
          this.modifyPhno = element.phno;
          this.modifyCity = element.city;
        })

      }
    }

    if (this.category == 'phoneNo') {

      this.resulte = _.filter(this.mainData, element => {
        return element.phno == this.name;
      })

      if (this.resulte.length > 0) {
        this.datatableFlag = true;

        _.each(this.resulte, element => {

          this.modifyName = element.name;
          this.modifyPhno = element.phno;
          this.modifyCity = element.city;
        })

      }
    }

    if (this.category == 'city') {

      this.resulte = _.filter(this.mainData, element => {
        return element.city == this.name;
      })

      if (this.resulte.length > 0) {
        this.datatableFlag = true;

        _.each(this.resulte, element => {

          this.modifyName = element.name;
          this.modifyPhno = element.phno;
          this.modifyCity = element.city;
        })

      }
    }


  }

  getModifedName(name: string) {
    this.nameChangeState = true;
    this.modifyName = name

  }
  getModifedPhno(phno: string) {
    this.phnoChangeState = true;
    this.modifyPhno = phno
  }
  getModifedCity(city: string) {
    this.cityChangeState = true;
    this.modifyCity = city
  }


  updateData() {


    if (this.nameChangeState || this.phnoChangeState || this.cityChangeState) {

      this.obj1 = { name: this.modifyName, phno: this.modifyPhno, city: this.modifyCity }
      console.log(this.obj1)
      this.userNameVisibility = true;
    }
    else {
      this.userNameVisibility = false;

    }
  }
  showModify() {
    this.showModifyData = true
  }
}


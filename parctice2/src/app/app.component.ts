import { Component, OnChanges, SimpleChange, SimpleChanges, input, numberAttribute } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import _, { includes } from "underscore"
import { SubComponent1Component } from './sub-component1/sub-component1.component';
import { compileNgModule } from '@angular/compiler';

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
  serachText: any;

  category: any = "";

  public resulte: any = []
  modifyName: string[] = [];
  modifyPhno: string[] = [];
  modifyCity: string[] = [];

  public dataPush: boolean = false
  public datatableFlag: boolean = false
  userNameVisibility = false

  nameChangeState: boolean = false;
  phnoChangeState: boolean = false;
  cityChangeState: boolean = false;

  //for pushing data to app compo...
  dataPushCheck: boolean = false;

  showModifyData = false;
  errorStatus = false;

  obj1: any;

  updateDataedObjFromChild: any;
  finalOutput: any;
  inputAccessble = true;

  specialCharectors = ['@', ' ', '/', ']', '[', '!', '#', '$', '%', '^', '&', '*', '(', ')', '}', '{', '|', '.', /^[0-9]+$/]
  ngOnChanges(changes: SimpleChanges): void {

    if (this.category == "") {
      this.inputAccessble = true
    }
    else {
      this.inputAccessble = false

    }
  }

  checkSingleChar(serachText: string) {

    console.log(serachText.slice(-1))

    if (_.contains(this.specialCharectors, serachText.slice(-1))) {
      this.serachText = serachText.slice(0, serachText.length - 1)
    }
    if (this.category == 'name') {
      if (this.isStringValid(serachText.slice(-1))) {
        // window.alert("Please Enter Text Only");
        this.serachText = serachText.slice(0, serachText.length - 1)
      }
    }
    else if (this.category == 'phoneNo') {
      if (!this.isStringValid(serachText.slice(-1)) && this.serachText != "") {
        // window.alert("Please Enter Number Only")
        this.serachText = serachText.slice(0, serachText.length - 1)

      }
    }
    else if (this.category == 'city') {
      if (this.isStringValid(serachText.slice(-1))) {
        // window.alert("Please Enter Text Only")
        this.serachText = serachText.slice(0, serachText.length - 1)
      }

    }
  }

  inputCategory(category: any) {
    this.inputAccessble = false;
    this.serachText = ""
  }

  isStringValid(serachText: string): boolean {
    let regx = /^[0-9]+$/
    return regx.test(serachText)
  }

  isNumberValid(serachText: string): boolean {
    let regxTenDigit = /^[0-9]{10}$/
    return regxTenDigit.test(serachText)
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



  searchUser() {
    if (this.serachText != "") {

      if (this.category == 'name') {


        if (!(this.isStringValid(this.serachText))) {

          this.inputAccessble = false
          this.resulte = _.filter(this.mainData, element => {
            return element.name == this.serachText;
          })

          console.log(typeof (this.category))
          if (this.resulte.length > 0) {
            this.datatableFlag = true;

            _.each(this.resulte, element => {

              this.modifyName.push(element.name)
              this.modifyPhno.push(element.phno)
              this.modifyCity.push(element.city)
            })
          }

          else {
            // window.alert("Record Not Found!")
            this.errorStatus = true
            setTimeout(() => {
              this.errorStatus = false
            }, 1000)
          }
        } else {
          window.alert("Please Enter Text Only")
        }
      }
      else if (this.category == 'phoneNo') {


        if ((this.isNumberValid(this.serachText))) {
          this.inputAccessble = false

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

          } else {
            window.alert("Record Not Found!")
          }
        } else {
          window.alert("Please Enter 10 Digit Number Only")

        }
      }

      else if (this.category == 'city') {

        let regx = /^[0-9]*$/

        if (!(this.isStringValid(this.serachText))) {
          this.inputAccessble = false

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

          } else {
            window.alert("Record Not Found!")
          }
        } else {
          window.alert("Please Enter Text Only")
        }
      }
      else {
        window.alert("Please Select Option")
      }
    }
    else {
      if (this.category == "")
        window.alert("Please Search some Thing and Select Option")
      else
        window.alert("Please Search some Thing")
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
  checkSingleCharectorOfName(Name: string, index: number) {
    if (Name == "") {
      window.alert("Please Fill Some Thing")
    }

  }
  checkSingleCharectorOfPhno(Phno: string, index: number) {


    if (Phno == "") {
      window.alert("Please Fill Some Thing")
    }

  }
  checkSingleCharectorOfCity(city: string, index: number) {


    if (city == "") {
      window.alert("Please Fill Some Thing")
    }

  }
  showUserDetials() {
    this.showModifyData = true
  }
}


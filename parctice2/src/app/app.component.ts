import { Component } from '@angular/core';
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
    city: "surat"
  }, {
    name: "mohit",
    phno: "9825108987",
    city: "surat"
  }, {
    name: "ashish",
    phno: "9825108987",
    city: "surat"
  }, {
    name: "karan",
    phno: "9825108987",
    city: "surat"
  }]
  name: string = "";
  public datatableFlag: boolean = false
  userNameVisibility = false
  public resulte: any = []
  newName = ""

  modifyName: string = "";
  modifyPhno: string = "";
  modifyCity: string = "";

  searchUser(event: any) {
    this.resulte = _.filter(this.mainData, element => {
      return element.name == this.name;
    })

    if (this.resulte.length > 0) {
      this.datatableFlag = true;

      _.each(this.resulte, element => {

        this.modifyName = element.name;
        this.modifyPhno = element.phno;
        this.modifyCity = element.city;

        console.log(element.name, element.phno, element.city)
        console.log(this.modifyCity, this.modifyName, this.modifyPhno)
      })

    }

  }
  update() {
    _.each(this.mainData, ele => {
      console.log(ele);
      // console.log(this.name);
      
      if (ele.name == this.name) {
        console.log("dsjgahkjsahksh");
        
        ele.name == this.modifyName
        //
        this.newName = this.modifyName
        console.log(this.newName, this.modifyName)
      }
      else{
        console.log("aaaaaa");
        
      }
    })
    //
    this.userNameVisibility = true;
    console.log(this.modifyName)
    console.log(this.newName)
    console.log(this.newName)

  }
  //     else if(selectValue=='phoneNo'){

  //     }
  //     else if(selectValue=='city'){

  // }

}


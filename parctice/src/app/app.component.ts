import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MyDataService } from './my-data.service';
import _ from "underscore"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public userData: any = [];
  constructor(private _data: MyDataService) { }

  ngOnInit() {
    let UserDetailsMainObj:any = [];

    let userDetailObj: any;

    this.userData = this._data.getUserData();
    // console.log(this.userData[0].data)

    _.each(this.userData[0].data, dataEle => {
      // console.log(dataEle.comments.data)
      _.each(dataEle.comments.data, commitEle => {
        // console.log("profile_picture",commitEle.from.profile_picture)

        // console.log("fullname",commitEle.from.full_name)
        // console.log("username",commitEle.from.username)

        // console.log("created_time",commitEle.created_time)
        // console.log("coment", commitEle.text)
        userDetailObj = {
          'fullName': commitEle.from.full_name,
          "lastName": commitEle.from.username,
          "pp": commitEle.created_time,
          "comment": commitEle.text
        }
        // console.log(UserDetailsMainObj)
        // console.log(userDetailObj)
        UserDetailsMainObj.push(userDetailObj);

      })
    })

    console.log(UserDetailsMainObj)
  }



}

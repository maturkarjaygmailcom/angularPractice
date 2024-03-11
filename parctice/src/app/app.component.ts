import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MyDataService } from './my-data.service';
import { CommentsComponent } from './comments/comments.component';
import _ from "underscore"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public userData: any = [];
  public UserDetailsMainObj: any = [];
  commentVisibility = false;

  profile_picture: string = "../../../../assets/img/149071.png"
  like_picture: string = "../../../../assets/img/24-243634_instagram-like-icon-png-image-free-download-searchpng.png"
  comment_picture: string = "../../../../assets/img/OIP (2).jfif"

  constructor(private _data: MyDataService) { }


  showComment() {
    console.log("kjhkljlk")
    this.commentVisibility = !this.commentVisibility
  }
  ngOnInit() {

    let userDetailObj: any;

    this.userData = this._data.getUserData();
    // console.log(this.userData[0].data)

    _.each(this.userData[0].data, dataEle => {
      // console.log(dataEle.comments.data)
      _.each(dataEle.comments.data, commitEle => {

        userDetailObj = {
          'fullName': commitEle.from.full_name,
          "username": commitEle.from.username,
          // "profile_picture": commitEle.from.profile_picture,
          "created_time": commitEle.created_time,
          "comment": commitEle.text,
          'post_image': commitEle.from.postImg
        }
        // console.log(UserDetailsMainObj)
        // console.log(userDetailObj)
        this.UserDetailsMainObj.push(userDetailObj);

      })
    })

    // console.log(this.UserDetailsMainObj)

  }



}

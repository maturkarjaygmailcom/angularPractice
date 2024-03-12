import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MyDataService } from '../my-data.service';
import _ from "underscore"
import { publicDecrypt } from 'crypto';
import { CommentsComponent } from '../comments/comments.component';
@Component({
  selector: 'app-users-feed',
  standalone: true,
  imports: [CommonModule,CommentsComponent],
  templateUrl: './users-feed.component.html',
  styleUrl: './users-feed.component.css'
})

export class UsersFeedComponent implements OnChanges {

  @Input() public userNamePassing: string = ""
  public userNameData: any = [];
  userDetailVisble = false;
  public userData: any = [];
  public UserDetailsMainObj: any = [];
  commentVisibility: boolean = false;

  profile_picture: string = "../../../../assets/img/149071.png"
  like_picture: string = "../../../../assets/img/24-243634_instagram-like-icon-png-image-free-download-searchpng.png"
  comment_picture: string = "../../../../assets/img/OIP (2).jfif"

  constructor(private _data: MyDataService) { }
  public message: boolean = false
  public userDetailObj: any;


  showComment() {
    // console.log(event)
    // console.log()
    this.commentVisibility = !this.commentVisibility

  }

  // ngOnInit() {
  //   console.log("sdjhjkshj")

  //   this.userData = this._data.getUserData();
  //   // console.log(this.userData[0].data)

  //   _.each(this.userData[0].data, dataEle => {
  //     // console.log(dataEle.comments.data)
  //     _.each(dataEle.comments.data, commitEle => {

  //       this.userDetailObj = {
  //         'fullName': commitEle.from.full_name,
  //         "username": commitEle.from.username,
  //         // "profile_picture": commitEle.from.profile_picture,
  //         "created_time": commitEle.created_time,
  //         "comment": commitEle.text,
  //         'post_image': commitEle.from.postImg
  //       }
  //       // console.log(UserDetailsMainObj)
  //       // console.log(userDetailObj)
  //       this.UserDetailsMainObj.push(this.userDetailObj);

  //     })
  //   })

  //   // console.log(this.UserDetailsMainObj)

  //   console.log(this.userNamePassing);
  // }

  ngOnChanges(changes: SimpleChanges): void {
    this.userDetailObj = []
    this.userNameData = this.userNamePassing;



    this.userData = this._data.getUserData();
    // console.log(this.userData[0].data)

    if (this.userNameData != "") {


      _.each(this.userData[0].data, dataEle => {
        // console.log(dataEle.comments.data)
        _.each(dataEle.comments.data, commitEle => {

          // console.log(this.userNameData == commitEle.from.full_name)

          this.userDetailObj = {
            'fullName': commitEle.from.full_name,
            "username": commitEle.from.username,
            // "profile_picture": commitEle.from.profile_picture,
            "created_time": commitEle.created_time,
            "comment": commitEle.text,
            'post_image': commitEle.from.postImg
          }
          // this.UserDetailsMainObj = []
          // this.userDetailVisble = true
          if (this.userNameData == commitEle.from.full_name && commitEle.from.full_name != "") {

            this.UserDetailsMainObj.push(this.userDetailObj);
            // console.log(this.UserDetailsMainObj)
            // console.log(this.UserDetailsMainObj)
          }
          else {
            // if(commitEle.from.full_name == "")
            // this.userDetailObj = []
            // this.userDetailVisble = false
            // console.log(this.userDetailVisble)

          }

        })

      })
    } else {
      this.userDetailObj = []
    }
    this.userDetailObj = []

    console.log(this.UserDetailsMainObj)

  }

}

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyDataService } from '../my-data.service';
import { CommentsComponent } from '../comments/comments.component';
import _ from "underscore"
import { setInterval } from 'timers';


@Component({
  selector: 'app-users-feed',
  standalone: true,
  imports: [CommonModule, CommentsComponent],
  templateUrl: './users-feed.component.html',
  styleUrl: './users-feed.component.css'
})

export class UsersFeedComponent implements OnChanges {

  @Input() public userNamePassing: string = ""
  public userNameData: any = [];
  // userDetailVisble = false;
  public userData: any = [];
  public UserDetailsMainObj: any = [];
  AlluserDetailsObj: any = []
  commentVisibility: boolean = false;

  profile_picture: string = "../../../../assets/img/149071.png"
  // like_picture: string = "../../../../assets/img/24-243634_instagram-like-icon-png-image-free-download-searchpng.png"
  comment_picture: string = "../../../../assets/img/OIP (2).jfif"

  constructor(private _data: MyDataService) { }
  public message: boolean = false
  public userDetailObj: any;

  showComment(event: any) {
    console.log(event.target.value)
    this.commentVisibility = !this.commentVisibility

  }

  ngOnInit() {

    this.UserDetailsMainObj = this._data.getUserAllData()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.userNamePassing != ""){

      this.UserDetailsMainObj = this._data.getUserData(this.userNamePassing)
      console.log(this.UserDetailsMainObj);
    } 
    else {
      this.UserDetailsMainObj.shift();
      this.UserDetailsMainObj = this._data.getUserAllData()
      console.log(this.UserDetailsMainObj);

    }

  }


}

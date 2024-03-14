import { Component, OnChanges, SimpleChanges,Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UsersFeedComponent } from './users-feed/users-feed.component';
import { CommentsComponent } from './comments/comments.component';

import _ from "underscore"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommentsComponent, SearchbarComponent, UsersFeedComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public name: string = "";
  public appusername: string = "";
  @Input() dataPasing=""
  commentVisibility=false
  sendName(e: any) {
    e.preventDefault();
    if (this.name != '') {
      this.appusername = this.name;
    }
  }
}

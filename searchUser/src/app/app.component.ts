import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = [22, 2, 3, 43, 21, 11];
  constructor(private routers: Router) { }
  gotoAddess() {
    this.routers.navigate(['about'])
    console.log("aaa")
  }
}

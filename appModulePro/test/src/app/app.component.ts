import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) { }

  shop() {
    this.router.navigate(['dashboard/shop','dmart'])
  }
  dashborad() {
    this.router.navigate(['dashboard', 'checkout'])
  }
  home() {
    this.router.navigate(['/'])
  }

}

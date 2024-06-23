import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
id:any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  shop() {
    this.router.navigate(['dashboard/shop','dmart'])
  }
  dashborad() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log();
    
    this.router.navigate(['dashboard', 'checkout'])
  }
  home() {
    this.router.navigate(['/'])
  }
  relince11(){
    this.router.navigate(['relince11',1])
  }
}

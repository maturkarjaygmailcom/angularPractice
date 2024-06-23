import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  id: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);
    // this.router.navigate(['dashboard',this.id])
  }

}

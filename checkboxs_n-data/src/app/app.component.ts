import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';
import _ from "underscore"
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  productArray = [];
  constructor(private _product_data: MyDataService) { }

  ngOnInit(): void {
    this._product_data.getProducts().subscribe(data => {
      this.productArray = data.products;
    })
  }

}

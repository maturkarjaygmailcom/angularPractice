import { Component ,formatDate} from '@angular/core';
import { MyDataService } from './my-data.service';
// import _ from "underscore"
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
  jstoday = formatDate(this, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');

  constructor(private _product_data: MyDataService) { }

  ngOnInit(): void {
    // // this._product_data.getProducts().subscribe(data => {
    // //   this.productArray = data.products;
    // })
  }

}

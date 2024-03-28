import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  _url: string = "../../assets/product.json"
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>("https://dummyjson.com/products")
    // return this.http.get<any>(this_url)
  }

}

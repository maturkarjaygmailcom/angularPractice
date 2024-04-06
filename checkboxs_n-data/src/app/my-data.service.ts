import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  // _url: string = '../assets/product_data.json';
  _url: string = "https://dummyjson.com/products"
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get("https://dummyjson.com/products")
  }

}

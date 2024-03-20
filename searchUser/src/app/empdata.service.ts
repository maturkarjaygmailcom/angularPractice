import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class EmpdataService {

  constructor(private http: HttpClient) { }



  getData() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}

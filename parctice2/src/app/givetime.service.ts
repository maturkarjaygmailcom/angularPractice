import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GivetimeService {

  constructor(private http: HttpClient) { }

  getdate():Observable<any> {
    return this.http.get<any>('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
  }

}

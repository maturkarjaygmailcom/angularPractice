import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerDateTimeService {

  constructor(private http: HttpClient) { }

  getDateTime() {
    return this.http.get("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  }
}

import { Component, OnInit } from '@angular/core';
import { ServerDateTimeService } from '../../server-date-time.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relince',
  templateUrl: './relince.component.html',
  styleUrl: './relince.component.css'
})
export class RelinceComponent implements OnInit {
  dataa:any
  
  constructor(private dt: ServerDateTimeService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    // this.dt.getDateTime()
    this.dataa=this.ar.snapshot.data['data11'];
  }

}

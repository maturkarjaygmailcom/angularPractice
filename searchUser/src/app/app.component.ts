import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmpdataService } from './empdata.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public empArray: any = [];

  constructor(private _empData: EmpdataService) { }
  ngOnInit(): void {
    this._empData.getData().subscribe((data) => {
      this.empArray = data
    })
  }
 
}
//fiouiuioug
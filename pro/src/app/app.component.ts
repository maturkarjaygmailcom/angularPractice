import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import DisableDevtool from 'disable-devtool';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  jstoday = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');

  ngOnInit(): void {
    // DisableDevtool();
    console.log(this.jstoday);

  }
}

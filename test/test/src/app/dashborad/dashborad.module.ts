import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboradComponent } from './dashborad.component';

const routes: Routes = [
  {
    path: '', component: DashboradComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboradModule,RouterModule.forChild(routes)
  ]
})
export class DashboradModule implements OnInit {
  ngOnInit(): void {
    console.log("hiiii");
  }

}

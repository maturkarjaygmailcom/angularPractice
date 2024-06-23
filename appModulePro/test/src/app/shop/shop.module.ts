import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { DmartComponent } from './dmart/dmart.component';
import { RelinceComponent } from './relince/relince.component';


@NgModule({
  declarations: [
    DmartComponent,
    RelinceComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }

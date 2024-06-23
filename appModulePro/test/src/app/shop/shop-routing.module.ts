import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmartComponent } from './dmart/dmart.component';
import { RelinceComponent } from './relince/relince.component';

const routes: Routes = [
  { path: '', component: RelinceComponent },
  { path: 'dmart', component: DmartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }

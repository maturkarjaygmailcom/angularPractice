import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { DmartComponent } from './dmart/dmart.component';
import { RelinceComponent } from './relince/relince.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'dmart', component: DmartComponent },
  { path: 'relince', component: RelinceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }

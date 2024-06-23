import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  { path: '', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'shop', loadChildren: () => import('../shop/shop.module').then(m => m.ShopModule) }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

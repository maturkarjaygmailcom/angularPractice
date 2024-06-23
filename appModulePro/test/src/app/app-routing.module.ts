import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelinceComponent } from './shop/relince/relince.component';
import { resolveGuard } from './resolve.guard';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  {
    path: 'relince11/:id',
    component: RelinceComponent,
    resolve: { data11: resolveGuard }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

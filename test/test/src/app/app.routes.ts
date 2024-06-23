import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: "", redirectTo: '/app', pathMatch: 'full'
    },
    {
        path: 'app', component: AppComponent
    },
    // {
    //     path: 'dash', loadChildren: () => import('./dashborad/dashborad.module').then(m => m.DashboradModule)
    // }
];

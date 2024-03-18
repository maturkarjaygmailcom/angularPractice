import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'about', component: AddressDetailsComponent },
    { path: '**', component: PageNotFoundComponent }
];

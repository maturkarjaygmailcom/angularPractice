import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DeptOverViewComponent } from './dept-over-view/dept-over-view.component';
import { DeptContactComponent } from './dept-contact/dept-contact.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },  //redirect
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AddressDetailsComponent },

    {
        path: 'dept/:id',
        component: DepartmentsComponent,
        children: [
            { path: 'overview', component: DeptOverViewComponent },
            { path: 'contect', component: DeptContactComponent }
        ]

    }, //id is placeHolder

    { path: '**', component: PageNotFoundComponent }  //wildcard 
];

export const routingComponents = [AddressDetailsComponent, PageNotFoundComponent, HomeComponent, DepartmentsComponent]
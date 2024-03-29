import { Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { DiscountComponent } from './discount/discount.component';
import { RatingComponent } from './rating/rating.component';
import { PriceComponent } from './price/price.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    // { path: "", redirectTo: "/dashborad", pathMatch: "full" },
    // { path: "dashborad", component: DashboardComponent }
    // {
    //     path: "dashborad", component: DashboardComponent, children: [
    //         { path: "category", component: CategoryComponent },
    //         { path: "brand", component: BrandComponent },
    //         { path: "discount", component: DiscountComponent },
    //         { path: "rating", component: RatingComponent },
    //         { path: "price", component: PriceComponent }
    //     ]
    // }
];

export const routingComponent = [
    BrandComponent,
    DiscountComponent,
    RatingComponent,
    PriceComponent,
    CategoryComponent]
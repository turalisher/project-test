import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerOverviewComponent} from "./components/customer-overview/customer-overview.component";

export enum Paths {
  CUSTOMER_OVERVIEW = 'customer-overview',
  ERROR_PAGE = '**'
}

const routes: Routes = [
  { path: Paths.CUSTOMER_OVERVIEW, component: CustomerOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

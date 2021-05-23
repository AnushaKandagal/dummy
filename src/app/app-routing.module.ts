import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './app.homecomponent';
import { DetailComponent } from './app.detailcomponent';
import { PageNotFoundComponent } from './pagenotfoundcomponent';



const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Details',        component: DetailComponent },
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestdetailsComponent } from './restdetails/restdetails.component';
import {AboutusComponent } from './aboutus/aboutus.component';

  import { from } from 'rxjs';

const routes: Routes = [{path:'',component:HomeComponent},
              {path:'restaurants/:name',component:RestaurantsComponent},
              {path:'loginpage',component:LoginpageComponent},
              {path:'restdetails/:name',component:RestdetailsComponent},
              {path:'aboutus',component:AboutusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // If there is no path selected it'll redirect to "/dashboard"
  { path: 'dashboard', component: DashboardComponent }, // DashboardComponent is executed when directed to "/dashboard"
  { path: 'detail/:id', component: HeroDetailComponent }, // HeroDetailComponent is executed when directed to "/detail/:id"
  { path: 'heroes', component: HeroesComponent} // HeroesComponent is executed when directed to "/heroes"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

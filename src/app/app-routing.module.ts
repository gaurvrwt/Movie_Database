import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PopularComponent } from './popular/popular/popular.component';
import { MyListComponent } from './my-list/my-list/my-list.component';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'popular',component:PopularComponent},
  {path:'my-list',component:MyListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnrolleeComponent} from './enrollee/enrollee.component'

const routes: Routes = [
  {path:'', component:EnrolleeComponent, pathMatch:'full'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }

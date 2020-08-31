import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeartComponent } from './heart-c/heart-c.component';


const routes: Routes = [

  { path: '', component: HeartComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeartRoutingModule { }

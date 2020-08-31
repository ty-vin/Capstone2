import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThroatComponent } from './throat-c/throat-c.component';


const routes: Routes = [

  { path: '', component: ThroatComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThroatRoutingModule { }

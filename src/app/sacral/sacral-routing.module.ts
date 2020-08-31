import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SacralComponent } from './sacral-c/sacral-c.component';

const routes: Routes = [

  { path: '', component: SacralComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SacralRoutingModule { }

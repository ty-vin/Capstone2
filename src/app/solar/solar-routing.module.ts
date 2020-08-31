import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolarComponent } from './solar-c/solar-c.component';

const routes: Routes = [

  { path: '', component: SolarComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolarRoutingModule { }

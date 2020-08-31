import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrownComponent } from './crown-c/crown-c.component';


const routes: Routes = [

  { path: '', component: CrownComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrownRoutingModule { }

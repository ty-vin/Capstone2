import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThirdeyeComponent } from './thirdeye-c/thirdeye-c.component';



const routes: Routes = [

  { path: '', component: ThirdeyeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdeyeRoutingModule { }

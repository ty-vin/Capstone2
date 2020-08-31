import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'crown',  loadChildren: () => import('./crown/crown.module').then(m => m.CrownModule) },
  { path: 'heart',  loadChildren: () => import('./heart/heart.module').then(m => m.HeartModule) },
  { path: 'info',  loadChildren: () => import('./info/info.module').then(m => m.InfoModule) },
  { path: 'root',  loadChildren: () => import('./root/root.module').then(m => m.RootModule) },
  { path: 'throat',  loadChildren: () => import('./throat/throat.module').then(m => m.ThroatModule) },
  { path: 'thirdeye',  loadChildren: () => import('./thirdeye/thirdeye.module').then(m => m.ThirdeyeModule) },
  { path: 'solar',  loadChildren: () => import('./solar/solar.module').then(m => m.SolarModule) },
  { path: 'sacral',  loadChildren: () => import('./sacral/sacral.module').then(m => m.SacralModule) },

  { path: '', redirectTo: '', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

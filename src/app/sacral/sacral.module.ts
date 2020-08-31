import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SacralRoutingModule } from './sacral-routing.module';
import { SacralComponent } from './sacral-c/sacral-c.component';


@NgModule({
  declarations: [SacralComponent],
  imports: [
    CommonModule,
    SacralRoutingModule
  ]
})
export class SacralModule { }

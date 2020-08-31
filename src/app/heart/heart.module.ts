import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeartRoutingModule } from './heart-routing.module';
import { HeartComponent } from './heart-c/heart-c.component';


@NgModule({
  declarations: [HeartComponent],
  imports: [
    CommonModule,
    HeartRoutingModule
  ]
})
export class HeartModule { }

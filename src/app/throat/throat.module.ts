import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThroatRoutingModule } from './throat-routing.module';
import { ThroatComponent } from './throat-c/throat-c.component';


@NgModule({
  declarations: [ThroatComponent],
  imports: [
    CommonModule,
    ThroatRoutingModule
  ]
})
export class ThroatModule { }

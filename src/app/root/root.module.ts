import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root-c/root-c.component';


@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    RootRoutingModule
  ]
})
export class RootModule { }

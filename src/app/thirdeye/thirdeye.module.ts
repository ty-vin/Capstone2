import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdeyeRoutingModule } from './thirdeye-routing.module';
import { ThirdeyeComponent } from './thirdeye-c/thirdeye-c.component';


@NgModule({
  declarations: [ThirdeyeComponent],
  imports: [
    CommonModule,
    ThirdeyeRoutingModule
  ]
})
export class ThirdeyeModule { }

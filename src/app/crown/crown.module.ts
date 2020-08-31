import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrownRoutingModule } from './crown-routing.module';
import { CrownComponent } from './crown-c/crown-c.component';


@NgModule({
  declarations: [CrownComponent],
  imports: [
    CommonModule,
    CrownRoutingModule
  ]
})
export class CrownModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';  /* slide over menu */
import { MatIconModule } from '@angular/material/icon';  /* slide over menu */
import { MatSidenavModule } from '@angular/material/sidenav';  /* slide over menu */
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, /* slide over menu */
    MatIconModule,  /* slide over menu */
    MatSidenavModule,  /* slide over menu */
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

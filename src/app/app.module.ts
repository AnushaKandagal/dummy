import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './app.detailcomponent';
import { PageNotFoundComponent } from './pagenotfoundcomponent';
import { HomeComponent } from './app.homecomponent';
import { DisplayService } from './display.service';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,DetailComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }

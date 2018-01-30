import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonsterDisplayComponent } from './monster-display/monster-display.component';
import {HippoContentService} from "./services/hippo-content.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    MonsterDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HippoContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { TitleModule } from './components/title/title.module';
import { HeroSelectionModule } from './components/hero-selection/hero-selection.module';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    TitleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

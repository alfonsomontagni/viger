import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgReactComponent } from './ng-react-generic-wrapper/ng-react.component';
import { ViewMap002Component } from './views-angular/view-map002/view-map002.component';

@NgModule({
  declarations: [
    AppComponent,
    NgReactComponent,
    ViewMap002Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

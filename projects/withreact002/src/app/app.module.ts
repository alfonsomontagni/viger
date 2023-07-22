import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgReactComponent } from './react/ng-react/ng-react.component';
import { ViewWithRComponent } from './components/view-with-r/view-with-r.component';
import { ViewWithR01Component } from './components/view-with-r01/view-with-r01.component';
import { ViewLezioneC1s11Component } from './components/view-lezione-c1s11/view-lezione-c1s11.component';
import { ViewLezioneC1s12Component } from './components/view-lezione-c1s12/view-lezione-c1s12.component';

@NgModule({
  declarations: [
    AppComponent,
    NgReactComponent,
    ViewWithRComponent,
    ViewWithR01Component,
    ViewLezioneC1s11Component,
    ViewLezioneC1s12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

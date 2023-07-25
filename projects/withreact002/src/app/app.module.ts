import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgReactComponent } from './react/ng-react/ng-react.component';
import { ViewWithRComponent } from './components/view-with-r/view-with-r.component';
import { ViewWithR01Component } from './components/view-with-r01/view-with-r01.component';
import { ViewLezioneC1s11Component } from './components/view-lezione-c1s11/view-lezione-c1s11.component';
import { ViewLezioneC1s12Component } from './components/view-lezione-c1s12/view-lezione-c1s12.component';
import { ViewLezioneC1s13Component } from './components/view-lezione-c1s13/view-lezione-c1s13.component';
import { ViewLezioneC1s13aComponent } from './components/view-lezione-c1s13a/view-lezione-c1s13a.component';
import { ViewLezioneC1s14Component } from './components/view-lezione-c1s14/view-lezione-c1s14.component';
import { ViewLezioneC1s17Component } from './components/view-lezione-c1s17/view-lezione-c1s17.component';
import { ViewLezioneC1s18Component } from './components/view-lezione-c1s18/view-lezione-c1s18.component';
import { ViewLezioneC1s19Component } from './components/view-lezione-c1s19/view-lezione-c1s19.component';
import { ViewLezioneC1s22Component } from './components/view-lezione-c1s22/view-lezione-c1s22.component';
import { ViewAppbase01Component } from './components/view-appbase01/view-appbase01.component';
import { ViewAppbase02routingComponent } from './components/view-appbase02routing/view-appbase02routing.component';
import { NgReactF01Component } from './react/ng-react/ng-react-f01.component';
import { ViewAppbase03Component } from './components/view-appbase03/view-appbase03.component';

@NgModule({
  declarations: [
    AppComponent,
    NgReactComponent,
    NgReactF01Component,
    ViewWithRComponent,
    ViewWithR01Component,
    ViewLezioneC1s11Component,
    ViewLezioneC1s12Component,
    ViewLezioneC1s13Component,
    ViewLezioneC1s13aComponent,
    ViewLezioneC1s14Component,
    ViewLezioneC1s17Component,
    ViewLezioneC1s18Component,
    ViewLezioneC1s19Component,
    ViewLezioneC1s22Component,
    ViewAppbase01Component,
    ViewAppbase02routingComponent,
    ViewAppbase03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

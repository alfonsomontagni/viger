import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgReactComponent } from './react/ng-react/ng-react.component';
import { ViewWithRComponent } from './components/view-with-r/view-with-r.component';

@NgModule({
  declarations: [
    AppComponent,
    NgReactComponent,
    ViewWithRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

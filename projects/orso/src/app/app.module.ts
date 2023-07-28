import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CarouselOneComponent } from './components/carousel-one/carousel-one.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselOneComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

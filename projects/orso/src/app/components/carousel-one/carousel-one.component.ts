import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-one',
  templateUrl: './carousel-one.component.html',
  styleUrls: ['./carousel-one.component.css']
})
export class CarouselOneComponent {
  images = [ 
    {name: 'Binah.jpg' ,caption: 'Binah'},
    {name: 'Chagidiel.jpg' ,caption: 'Chagidiel'},
    {name: 'Togarini.jpg' ,caption: 'Togarini'}
  ];
}

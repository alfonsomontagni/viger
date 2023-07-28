import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [ 
    {name: 'Binah.jpg' ,caption: 'Binah'},
    {name: 'Chagidiel.jpg' ,caption: 'Chagidiel'},
    {name: 'Togarini.jpg' ,caption: 'Togarini'}
  ];

  constructor(){
    console.log("images",this.images)
  }
}

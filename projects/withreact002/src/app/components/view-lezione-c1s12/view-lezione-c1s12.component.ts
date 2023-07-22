import { Component } from '@angular/core';
import type { ComponentProps } from "react";
import Lezione_1_12 from '../../react/Lezione_1_12';

@Component({
  selector: 'app-view-lezione-c1s12',
  templateUrl: './view-lezione-c1s12.component.html',
  styleUrls: ['./view-lezione-c1s12.component.css']
})
export class ViewLezioneC1s12Component {
  Lezione_1_12 = Lezione_1_12;
  myPropsc1s12: ComponentProps<typeof Lezione_1_12> = {
   
  }
}

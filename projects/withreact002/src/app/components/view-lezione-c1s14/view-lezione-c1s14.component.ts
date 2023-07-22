import { Component } from '@angular/core';
import type { ComponentProps } from "react";
import Lezione_1_14 from '../../react/Lezione_1_14';

@Component({
  selector: 'app-view-lezione-c1s14',
  templateUrl: './view-lezione-c1s14.component.html',
  styleUrls: ['./view-lezione-c1s14.component.css']
})
export class ViewLezioneC1s14Component {
  Lezione_1_14 = Lezione_1_14;
  myPropsc1s14: ComponentProps<typeof Lezione_1_14> = {
    
  }
}

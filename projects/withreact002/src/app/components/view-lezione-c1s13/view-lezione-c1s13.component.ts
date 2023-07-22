import { Component } from '@angular/core';
import type { ComponentProps } from "react";
import Lezione_1_13 from '../../react/Lezione_1_13';
@Component({
  selector: 'app-view-lezione-c1s13',
  templateUrl: './view-lezione-c1s13.component.html',
  styleUrls: ['./view-lezione-c1s13.component.scss']
})
export class ViewLezioneC1s13Component {
  Lezione_1_13 = Lezione_1_13;
  myPropsc1s13: ComponentProps<typeof Lezione_1_13> = {
   
  }
}

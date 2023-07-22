import { Component } from '@angular/core';
import type { ComponentProps } from "react";
import Lezione_1_17 from '../../react/Lezione_1_17';

@Component({
  selector: 'app-view-lezione-c1s17',
  templateUrl: './view-lezione-c1s17.component.html',
  styleUrls: ['./view-lezione-c1s17.component.scss']
})
export class ViewLezioneC1s17Component {
  Lezione_1_17 = Lezione_1_17;
  myPropsc1s17: ComponentProps<typeof Lezione_1_17> = {
    
  }
}

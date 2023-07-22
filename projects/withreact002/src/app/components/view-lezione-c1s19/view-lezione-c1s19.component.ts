import { Component } from '@angular/core';
import type { ComponentProps } from "react";
import Lezione_1_19 from '../../react/Lezione_1_19';

@Component({
  selector: 'app-view-lezione-c1s19',
  templateUrl: './view-lezione-c1s19.component.html',
  styleUrls: ['./view-lezione-c1s19.component.scss']
})
export class ViewLezioneC1s19Component {
  Lezione_1_19 = Lezione_1_19;
  myPropsc1s19: ComponentProps<typeof Lezione_1_19> = {
    
  }
}

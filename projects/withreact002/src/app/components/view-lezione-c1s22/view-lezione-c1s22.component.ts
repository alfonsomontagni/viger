import { Component } from '@angular/core';
import type { ComponentProps } from "react";
import Lezione_1_22 from '../../react/Lezione_1_22';

@Component({
  selector: 'app-view-lezione-c1s22',
  templateUrl: './view-lezione-c1s22.component.html',
  styleUrls: ['./view-lezione-c1s22.component.scss']
})
export class ViewLezioneC1s22Component {
  Lezione_1_22 = Lezione_1_22;
  myPropsc1s22: ComponentProps<typeof Lezione_1_22> = {
    
  }
}
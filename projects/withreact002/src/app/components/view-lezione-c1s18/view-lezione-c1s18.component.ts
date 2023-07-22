import { Component } from '@angular/core';
import type { ComponentProps } from "react";
import Lezione_1_18 from '../../react/Lezione_1_18';
@Component({
  selector: 'app-view-lezione-c1s18',
  templateUrl: './view-lezione-c1s18.component.html',
  styleUrls: ['./view-lezione-c1s18.component.scss']
})
export class ViewLezioneC1s18Component {
  Lezione_1_18 = Lezione_1_18;
  myPropsc1s18: ComponentProps<typeof Lezione_1_18> = {
    
  }
}

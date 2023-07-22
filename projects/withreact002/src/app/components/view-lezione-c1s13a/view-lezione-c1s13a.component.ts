
import { Component } from '@angular/core';
import type { ComponentProps } from "react";
import Lezione_1_13aa from '../../react/Lezione_1_13aa';
@Component({
  selector: 'app-view-lezione-c1s13a',
  templateUrl: './view-lezione-c1s13a.component.html',
  styleUrls: ['./view-lezione-c1s13a.component.scss']
})
export class ViewLezioneC1s13aComponent {
  Lezione_1_13a = Lezione_1_13aa;
  myPropsc1s13a: ComponentProps<typeof Lezione_1_13aa> = {
    
  }
}

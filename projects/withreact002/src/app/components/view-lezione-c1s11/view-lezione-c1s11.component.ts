import { Component } from '@angular/core';
import Lezione_1_11 from '../../react/Lezione_1_11';
import type { ComponentProps } from "react";

@Component({
  selector: 'app-view-lezione-c1s11',
  templateUrl: './view-lezione-c1s11.component.html',
  styleUrls: ['./view-lezione-c1s11.component.css']
})
export class ViewLezioneC1s11Component {
  Lezione_1_11 = Lezione_1_11;
  myProps: ComponentProps<typeof Lezione_1_11> = {
   
  }
}

import { Component } from '@angular/core';
import AppMap002 from '../../componenti-react/app-map-002';
import { ComponentProps } from 'react';
//import { Utente } from '../../componenti-react/models';

@Component({
  selector: 'app-view-map002',
  templateUrl: './view-map002.component.html',
  styleUrls: ['./view-map002.component.scss']
})
export class ViewMap002Component {
  MyReact = AppMap002;
 /* utenti :Utente[]=  [
    { id: 1, name: 'FabioXX' },
    { id: 2, name: 'LorenzoXX' },
    { id: 3, name: 'SilviaXX' }
];*/
  myProps: ComponentProps<typeof AppMap002> = {

  }

}

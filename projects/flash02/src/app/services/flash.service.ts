import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashService {

  constructor() { }
  hiero = {
    "hieroglyphs": [
      {
        "idH": "1",
        "type": "monolitteral",
        "translate": "trans_late",
        "img": "test.jpg",
        "gardinerList": ""
      },
      {
        "idH": "2",
        "type": "monolitteral",
        "translate": "trans_late",
        "img": "test.jpg",
        "gardinerList": ""
      }
    ]
  }
  getHieroglyphs(): Observable<any> {
    return of(this.hiero);
  }
  
}

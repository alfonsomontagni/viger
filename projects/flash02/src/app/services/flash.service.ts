import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { Hieroglyph } from '../models/flash-model';

@Injectable({
  providedIn: 'root'
})
export class FlashService {

  private baseUrl = 'http://localhost:4000'; // L'indirizzo e la porta su cui gira json-server

  constructor(private http: HttpClient) { } 
  
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
  getHieroglyphs(): Observable<Hieroglyph[] > {
   // return of(this.hiero);
   
    return this.http.get<Hieroglyph[] >(`${this.baseUrl}/hieroglyphs`).pipe(
      tap((r)=>{
        //console.log("torna",r)
      }),
     // delay(2000)
    );

  }
  
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderCell, HieroglyphColumnHeader } from '../models/header-cell-model';
import { FlashService } from '../services/flash.service';
import { Hieroglyph } from '../models/flash-model';

@Component({
  selector: 'app-table-manager',
  templateUrl: './table-manager.component.html',
  styleUrls: ['./table-manager.component.css']
})
export class TableManagerComponent implements OnInit, OnDestroy {
  headers: HeaderCell[];
  isDataLoaded: boolean;
  datac: Hieroglyph[];
  dialogue: any
constructor(private flashService: FlashService){
  //this.dialogue = new SpeechSynthesisUtterance("CIAO CRISTINA")
}
  ngOnInit(): void {
    this.refresh();
    //speechSynthesis.speak(this.dialogue)
    speechSynthesis.onvoiceschanged = ()=> voicesChanged("hai premuto carica la tabella \ ")
  }
/*
ngOnInit(): void {

    speechSynthesis.onvoiceschanged = voicesChanged
  }
  */
  ngOnDestroy(): void {

  }
  createHeaders(namesColumn: string[], colHeaders: string[]): HeaderCell[] {
    let heads: HeaderCell[] = [];
    for (let i = 0; i < namesColumn.length; i++) {
      let headCell: HeaderCell = new HeaderCell(
        namesColumn[i], 'htCenter', null, null, 'asc', null, null, colHeaders[i],
        false, false, i, 'text', 'text', undefined
      )
      headCell.className = 'htCenter';
      heads.push(headCell);
    }
    console.log("heads",heads)
    return heads
  }

  refresh() {
    const certColumnHeader: HieroglyphColumnHeader = new HieroglyphColumnHeader();
    const namesColumn: string[] = Object.getOwnPropertyNames(certColumnHeader);
    const colHeaders = namesColumn.map(name => (certColumnHeader as any)[name]);
    this.headers = this.createHeaders(namesColumn, colHeaders);
    console.log( this.headers);
    this.flashService.getHieroglyphs().subscribe((res: {hieroglyphs:Hieroglyph[] })=>{
      console.log("res",res)
      this.datac = res.hieroglyphs;
          this.isDataLoaded = true
    })
  }
}
export function voicesChanged(message:string ){
  let voices = speechSynthesis.getVoices()
  for(let i = 0; i < voices.length; i++){
    console.log(voices[i])
    //Microsoft Cosimo - Italian (Italy)
    if(voices[i].name == "Microsoft Elsa - Italian (Italy)"){
     // console.log("test")
     // let dialogue = new SpeechSynthesisUtterance(" \ ")
      let dialogue = new SpeechSynthesisUtterance(message)
dialogue.voice = voices[i]
speechSynthesis.speak(dialogue)
break
    }
  }
}
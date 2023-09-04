import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { HeaderCell, HieroglyphColumnHeader } from '../models/header-cell-model';
import { FlashService } from '../services/flash.service';
import { Hieroglyph } from '../models/flash-model';
import { CommunicationService } from '../services/communication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-manager',
  templateUrl: './table-manager.component.html',
  styleUrls: ['./table-manager.component.css']
})
export class TableManagerComponent implements AfterViewInit, OnInit, OnDestroy {
  headers: HeaderCell[];
  isDataLoaded: boolean ;
  datac: Hieroglyph[]  ;
  dialogue: any
  reLoaded = true
  ngAfterViewInit() {
    console.log("tableLoaded")

      setTimeout(() => {
     // this.communicationService.tableLoaded(true);
    });
  }
constructor(private flashService: FlashService,private communicationService: CommunicationService,
  private activatedRoute:ActivatedRoute
  ){
  //this.dialogue = new SpeechSynthesisUtterance("CIAO CRISTINA")
}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log("activata")
      if (params['reload']) {
        // Effettua la chiamata HTTP per ricaricare i dati
        console.log("activataRELOAD")
        this.reLoaded = false
        setTimeout(() => {
          this.communicationService.tableLoaded(false);

          this.reLoaded = true
          this.refresh();
        }, 100);
       
      } else{
        setTimeout(() => {
          this.communicationService.tableLoaded(true);

          this.refresh();
        }, 100);

      }
      // Recupera altre variabili con params['nomeVariabile']
    });
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
    console.log( "haed 1",this.headers);

    this.flashService.getHieroglyphs().subscribe(
      (res: any)=>{
      console.log("resddd",res)
      console.log("Raw response:", res);

      this.datac =  res  ;
      console.log(" this.datac", this.datac)

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

function OutPut(): (target: TableManagerComponent, propertyKey: "tableLoaded") => void {
  throw new Error('Function not implemented.');
}

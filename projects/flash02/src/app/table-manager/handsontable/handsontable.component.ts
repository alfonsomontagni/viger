import { Component, Input, OnInit } from '@angular/core';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';
import { HColumn, HeaderCell } from '../../models/header-cell-model';
import { Hieroglyph } from '../../models/flash-model';
@Component({
  selector: 'app-handsontable',
  templateUrl: './handsontable.component.html',
  styleUrls: ['./handsontable.component.css']
})
export class HandsontableComponent implements OnInit {
  countRows = { displayName: "Line count" };
  instanceItn: string = "tableItn";
  @Input('dataitn') dataitn: Hieroglyph[];
  @Input('headersItn') headersItn: HeaderCell[];

  handsonItnTableSettings: Handsontable.GridSettings = {};
  handsonItnTableColumns: Handsontable.ColumnSettings[] = [];
  handsonItnTableDataSource: any[];
  DefaultTotalWidth: number[];
  DefaultWidth: number[] = [100, 100, 100, 100, 100, 100, 100, 100]
  matEditIconFas = `<span title="edit"  class="mr-2" style="cursor: pointer"><i class="fas fa-edit"></i></span>`;
//<i class="fa-solid fa-dinosaur"></i>
  matDeleteIconFas = `<span title="delete" class="mr-2" style="cursor: pointer"><i class="fas fa-trash"></i></span>`;
  matVisibilityIconFas = `<span title="view" class="mr-2" style="cursor: pointer"><i class="fas fa-eye"></i></span>`;

  matEditIcon = `<span title="edit" class="material-icons action mr-2" style="cursor: pointer">mode_edit</span>`;
  matDeleteIcon = `<span title="delete" class="material-icons action mr-2" style="cursor: pointer">delete_outline</span>`;
  matSimCardDownload = `<span title="download" class="material-icons action mr-2" style="cursor: pointer">sim_card_download</span>`;
  matVisibilityIcon = `<span title="view" class="material-icons action mr-2" style="cursor: pointer">visibility</span>`;

  constructor(public hotRegisterer: HotTableRegisterer) {

  }
  ngOnInit(): void {
    this.handsonItnTableDataSource = this.dataitn
    this.getHeaderItn();

    this.initItnTableSettings();
  }
  initItnTableSettings() {
    console.log("this.handsonItnTableDataSource", this.handsonItnTableDataSource)
    this.handsonItnTableSettings = {
      data: this.handsonItnTableDataSource,
      columns: this.handsonItnTableColumns,
      licenseKey: 'non-commercial-and-evaluation',
      filter: true,
      disableVisualSelection: false,
      //  colHeaders: true,
      /*
      hiddenColumns: {
        columns: []
      },*/
      hiddenRows: true,
      correctFormat: true,
      manualColumnResize: true,
      // fixedColumnsLeft: 3,
      autoRowSize: false,
      autoColumnSize: false,
      colWidths: this.getColumnWidths(),
      rowHeights: this.getRowHigth(),
      dropdownMenu: [
        "alignment",
        "filter_by_condition",
        "filter_by_value",
        "filter_action_bar",
      ],
      filters: true,
      dateFormat: "DD/MM/YYYY",
      stretchH: "all",
      // observeChanges: false,
      height: 600,
      //sortEmptyCells: true,
      // multiColumnSorting: true,
      multiColumnSorting: {
        sortEmptyCells: true,
        indicator: true,
      },
      comments: true,
      persistentState: true,
      manualColumnMove: false,
      wordWrap: false,
      columnSorting: false,
      //sortIndicator: true,
      manualRowResize: false,
      //minSpareRows: false,
      minSpareRows: 0,
      rowHeaders: true,
      renderAllRows: false,
      fillHandle: {
        direction: 'vertical'
      },
      selectionMode: 'single',
    };
  }
  getRowHigth() {
    const lengthTot = this.headersItn.length;
    return new Array(lengthTot).fill(8)
  }
  getColumnWidths() {
    const lengthDef = this.DefaultWidth.length;
    const lengthTot = this.headersItn.length;
    const lengthDiff = lengthTot - lengthDef;
    let newArr;
    lengthDiff > 0
      ? (newArr = new Array(lengthDiff + 1).fill(200))
      : (newArr = []);
    this.DefaultTotalWidth = this.DefaultWidth.concat(newArr);
    return this.DefaultTotalWidth;
  }

  getHeaderItn() {
    //console.log ("this.headersItn",this.headersItn)
    this.headersItn.forEach((head) => {
      if (head) {
        const headNew: HColumn = {
          title: head.displayName ? head.displayName : head.name,
          data: head.name,
          editor: head.type,
          source: head.dropDownValues,
          allowInvalid: head.allowInvalid,
          skipColumnOnPaste: head.skipColumnOnPaste,
          type: head.type,
          className: head.className,
          readOnly: false,
          renderer: undefined
        };
        let isRendererText = true
        headNew.renderer = this.commonRenderer.bind(this);
        /*if(headNew.renderer === null){
          console.log("REND NULL",headNew)
        }*/
        if (headNew.title === "ACTIONS") {
          headNew.renderer = this.customButtonRenderer.bind(this);
          headNew.readOnly = true;
          isRendererText = false
        }
        this.handsonItnTableColumns.push(headNew);
      }
    });
  }
  commonRenderer(instance: any, td: HTMLElement, row: any, col: any, prop: any, value: any, cellProperties: any) {
    td.innerHTML = value ? value : ""
    td.classList.add("htCenter");
    td.classList.add("htMiddle");
    return td;
  }
  customButtonRenderer(instance: any, td: HTMLElement, row: any, col: any, prop: any, value: any, cellProperties: any) {
    const item = instance.getDataAtRow(row);
    td.classList.add("htCenter");
    td.classList.add("htMiddle");
    this.assignSelectedItem(td, item, row, instance);
    return td;
  }

  assignSelectedItem(td: HTMLElement, item: any, row: any, instance: any) {
    let i = 0;
    let j = 0;
    let z = 0;
    let requirementCondition = true;

    td.innerHTML =this.matVisibilityIconFas + this.matEditIconFas + this.matDeleteIconFas //matEditIcon + this.matVisibilityIcon + this.matDeleteIcon;
    z = 2

    j = 1;
    td.classList.add("htCenter");
    td.classList.add("htMiddle");
    td.classList.add("htNoWrap");

    if (requirementCondition) {
      td.children[i].addEventListener("mousedown", (event: Event) => {
        const hiero: any = instance.getSourceDataAtRow(instance.toPhysicalRow(row));
        console.log("view", hiero)
        event.stopPropagation();

      });
      td.children[j].addEventListener("mousedown", (event: Event) => {
        const hiero: any = instance.getSourceDataAtRow(instance.toPhysicalRow(row));
        console.log("hiero", hiero)
        event.stopPropagation();

      });
      td.children[z].addEventListener("mousedown", (event: Event) => {
        const hiero: any = instance.getSourceDataAtRow(instance.toPhysicalRow(row));
        console.log("DELETE", hiero)
        event.stopPropagation();

      });
    
    }
  }
}

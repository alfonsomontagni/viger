import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableManagerRoutingModule } from './table-manager-routing.module';
import { TableManagerComponent } from './table-manager.component';
import { HandsontableComponent } from './handsontable/handsontable.component';
import { HotTableModule } from '@handsontable/angular';


@NgModule({
  declarations: [
    TableManagerComponent,
    HandsontableComponent
  ],
  imports: [
    CommonModule,
    TableManagerRoutingModule,
    HotTableModule
  ]
})
export class TableManagerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
  ]
})
export class MaterialModule { }

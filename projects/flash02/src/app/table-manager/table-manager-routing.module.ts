import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableManagerComponent } from './table-manager.component';

const routes: Routes = [{ path: '', component: TableManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableManagerRoutingModule { }

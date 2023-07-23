import { Component } from '@angular/core';
import { ComponentProps } from 'react';
import AppBase from '../../react/pages/AppBase';

@Component({
  selector: 'app-view-appbase01',
  templateUrl: './view-appbase01.component.html',
  styleUrls: ['./view-appbase01.component.css']
})
export class ViewAppbase01Component {
  AppBase01 = AppBase;
  myPropsAppBase01: ComponentProps<typeof AppBase> = {
    
  }
}

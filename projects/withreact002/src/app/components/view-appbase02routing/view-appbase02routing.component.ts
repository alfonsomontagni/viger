import { Component } from '@angular/core';
import AppBaseRouting from '../../react/pages/AppBaseRouting';
import { ComponentProps } from 'react';

@Component({
  selector: 'app-view-appbase02routing',
  templateUrl: './view-appbase02routing.component.html',
  styleUrls: ['./view-appbase02routing.component.css']
})
export class ViewAppbase02routingComponent {
  AppBase02 = AppBaseRouting;
  myPropsAppBase02: ComponentProps<typeof AppBaseRouting> = {
    
  }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from "@angular/core";
import MyReact from "../../react/MyReact";
import type { ComponentProps } from "react";

@Component({
  selector: 'app-view-with-r',
  templateUrl:  './view-with-r.component.html'
})
export class ViewWithRComponent {
  MyReact = MyReact;
  msg = '';
  myProps: ComponentProps<typeof MyReact> = {
    name: 'My React Component',
    onClick: _ => this.msg = 'React Button Clicked'
  }

}

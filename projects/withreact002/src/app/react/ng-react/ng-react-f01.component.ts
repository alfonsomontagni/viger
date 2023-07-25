
import { Component, ElementRef, EventEmitter, inject, Input, Output } from "@angular/core";
import { ComponentProps, createElement, ElementType } from "react";
import { createRoot } from "react-dom/client";

@Component({
  selector: "ng-react-f01",
  template: ''
})
export class NgReactF01Component<Comp extends ElementType> {
  @Input() component: Comp;
  @Input() props: ComponentProps<Comp>;
  @Output() customEvent = new EventEmitter<string>();
  
  private root = createRoot(inject(ElementRef).nativeElement);
  
  ngOnInit() {
    console.log("INIT props ng-react-f01", this.props)
  }

  ngOnChanges() { 
    this.root.render(createElement(this.component, this.props));
  }

  handleReactEvent(data: string) {
    this.customEvent.emit(data);
  }
  ngOnDestroy() { 
    this.root.unmount();
  }
}
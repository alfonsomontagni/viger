import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showTable = false;
  @Input() tableIsLoaded: boolean;
  @Output() reloadTablehiero = new EventEmitter<boolean>();
  constructor(private router: Router) { }


  navigateTable() {
    this.showTable = true;
    this.router.navigate(['/table']);
  }
  reloadTable() {
    
    if (!this.showTable) {
      this.showTable = true;
      this.router.navigate(['/table']);
    }else{
      this.reloadTablehiero.emit(true)
    }
  }

}

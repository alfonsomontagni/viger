import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flash02';
  constructor(  private router:Router){
    
  }
  linkTable(){
    this.router.navigate(['/table']);
  }
}

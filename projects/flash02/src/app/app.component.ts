import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunicationService } from './services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'flash02';
   showButton = true;
   tableIsLoaded = false;
   private subscription: Subscription;
  constructor(  private router:Router,
    // private cdRef: ChangeDetectorRef,
     private communicationService: CommunicationService ){
  //  this.showButton = this.router.url !== '/table';

   
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.subscription = this.communicationService.tableLoaded$.subscribe(
      (isLoaded) =>{ this.tableIsLoaded = isLoaded;this.showButton=isLoaded }
    );
   // this.showButton = this.router.url !== '/table';
    this.router.events.subscribe((event) => {
      if (this.router.url === '/table') {
        this.showButton = false;
      } else {
        this.showButton = true;
      }
     // this.showButton = this.router.url !== '/table';
     // this.cdRef.detectChanges();
    });
  }
  
  linkTable(){
    this.router.navigate(['/table']);
   // this.isVisible=false
  }
  reloadTablehieroParent(event: boolean){
    console.log("reloadTablehieroParent ",event)
    if(event){
      this.communicationService.tableLoaded(false);
        let params = {
          reload: true,
          // altre variabili che desideri passare
        };
        this.router.navigate(['/table'], { queryParams: params });
          }
  }
}

import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService implements OnDestroy {

  private tableLoadedSource = new BehaviorSubject<boolean>(false);
  tableLoaded$ = this.tableLoadedSource.asObservable();

  tableLoaded(isLoaded: boolean) {
    this.tableLoadedSource.next(isLoaded);
  }

  ngOnDestroy() {
    this.tableLoadedSource.complete();
  }
}

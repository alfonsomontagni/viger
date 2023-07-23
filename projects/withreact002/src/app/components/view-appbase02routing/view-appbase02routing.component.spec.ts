import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppbase02routingComponent } from './view-appbase02routing.component';

describe('ViewAppbase02routingComponent', () => {
  let component: ViewAppbase02routingComponent;
  let fixture: ComponentFixture<ViewAppbase02routingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppbase02routingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppbase02routingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

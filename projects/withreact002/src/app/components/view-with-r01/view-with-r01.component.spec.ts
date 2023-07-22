import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWithR01Component } from './view-with-r01.component';

describe('ViewWithR01Component', () => {
  let component: ViewWithR01Component;
  let fixture: ComponentFixture<ViewWithR01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWithR01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWithR01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppbase03Component } from './view-appbase03.component';

describe('ViewAppbase03Component', () => {
  let component: ViewAppbase03Component;
  let fixture: ComponentFixture<ViewAppbase03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppbase03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppbase03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

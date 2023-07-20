import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMap002Component } from './view-map002.component';

describe('ViewMap002Component', () => {
  let component: ViewMap002Component;
  let fixture: ComponentFixture<ViewMap002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMap002Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMap002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

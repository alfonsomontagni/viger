import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppbase01Component } from './view-appbase01.component';

describe('ViewAppbase01Component', () => {
  let component: ViewAppbase01Component;
  let fixture: ComponentFixture<ViewAppbase01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppbase01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppbase01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

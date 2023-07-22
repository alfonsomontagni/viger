import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLezioneC1s14Component } from './view-lezione-c1s14.component';

describe('ViewLezioneC1s14Component', () => {
  let component: ViewLezioneC1s14Component;
  let fixture: ComponentFixture<ViewLezioneC1s14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLezioneC1s14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLezioneC1s14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

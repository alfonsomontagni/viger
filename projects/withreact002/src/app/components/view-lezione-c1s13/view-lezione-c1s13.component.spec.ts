import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLezioneC1s13Component } from './view-lezione-c1s13.component';

describe('ViewLezioneC1s13Component', () => {
  let component: ViewLezioneC1s13Component;
  let fixture: ComponentFixture<ViewLezioneC1s13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLezioneC1s13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLezioneC1s13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

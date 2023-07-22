import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLezioneC1s11Component } from './view-lezione-c1s11.component';

describe('ViewLezioneC1s11Component', () => {
  let component: ViewLezioneC1s11Component;
  let fixture: ComponentFixture<ViewLezioneC1s11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLezioneC1s11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLezioneC1s11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

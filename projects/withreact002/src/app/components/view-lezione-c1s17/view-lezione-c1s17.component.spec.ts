import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLezioneC1s17Component } from './view-lezione-c1s17.component';

describe('ViewLezioneC1s17Component', () => {
  let component: ViewLezioneC1s17Component;
  let fixture: ComponentFixture<ViewLezioneC1s17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLezioneC1s17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLezioneC1s17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

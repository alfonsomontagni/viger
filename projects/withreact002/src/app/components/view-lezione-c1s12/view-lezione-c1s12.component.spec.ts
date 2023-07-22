import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLezioneC1s12Component } from './view-lezione-c1s12.component';

describe('ViewLezioneC1s12Component', () => {
  let component: ViewLezioneC1s12Component;
  let fixture: ComponentFixture<ViewLezioneC1s12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLezioneC1s12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLezioneC1s12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

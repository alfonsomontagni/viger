import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLezioneC1s18Component } from './view-lezione-c1s18.component';

describe('ViewLezioneC1s18Component', () => {
  let component: ViewLezioneC1s18Component;
  let fixture: ComponentFixture<ViewLezioneC1s18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLezioneC1s18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLezioneC1s18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

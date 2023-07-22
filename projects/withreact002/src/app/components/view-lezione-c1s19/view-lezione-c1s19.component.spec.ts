import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLezioneC1s19Component } from './view-lezione-c1s19.component';

describe('ViewLezioneC1s19Component', () => {
  let component: ViewLezioneC1s19Component;
  let fixture: ComponentFixture<ViewLezioneC1s19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLezioneC1s19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLezioneC1s19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

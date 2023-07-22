import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLezioneC1s22Component } from './view-lezione-c1s22.component';

describe('ViewLezioneC1s22Component', () => {
  let component: ViewLezioneC1s22Component;
  let fixture: ComponentFixture<ViewLezioneC1s22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLezioneC1s22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLezioneC1s22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLezioneC1s13aComponent } from './view-lezione-c1s13a.component';

describe('ViewLezioneC1s13aComponent', () => {
  let component: ViewLezioneC1s13aComponent;
  let fixture: ComponentFixture<ViewLezioneC1s13aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLezioneC1s13aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLezioneC1s13aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

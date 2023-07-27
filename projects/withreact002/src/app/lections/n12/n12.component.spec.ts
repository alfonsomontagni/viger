import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N12Component } from './n12.component';

describe('N12Component', () => {
  let component: N12Component;
  let fixture: ComponentFixture<N12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

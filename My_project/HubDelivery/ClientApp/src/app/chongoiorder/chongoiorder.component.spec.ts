import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChonGoiOrderComponent } from './chongoiorder.component';

describe('ChonGoiOrderComponent', () => {
  let component: ChonGoiOrderComponent;
  let fixture: ComponentFixture<ChonGoiOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChonGoiOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChonGoiOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

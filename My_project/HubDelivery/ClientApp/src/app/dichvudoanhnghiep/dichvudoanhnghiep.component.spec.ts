import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichvudoanhnghiepComponent } from './dichvudoanhnghiep.component';

describe('DichvudoanhnghiepComponent', () => {
  let component: DichvudoanhnghiepComponent;
  let fixture: ComponentFixture<DichvudoanhnghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichvudoanhnghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichvudoanhnghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

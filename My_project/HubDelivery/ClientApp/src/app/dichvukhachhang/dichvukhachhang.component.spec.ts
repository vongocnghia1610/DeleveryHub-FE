import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichvukhachhangComponent } from './dichvukhachhang.component';

describe('DichvukhachhangComponent', () => {
  let component: DichvukhachhangComponent;
  let fixture: ComponentFixture<DichvukhachhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichvukhachhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichvukhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapnhatgoikhachhangComponent } from './capnhatgoikhachhang.component';

describe('CapnhatgoikhachhangComponent', () => {
  let component: CapnhatgoikhachhangComponent;
  let fixture: ComponentFixture<CapnhatgoikhachhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapnhatgoikhachhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapnhatgoikhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

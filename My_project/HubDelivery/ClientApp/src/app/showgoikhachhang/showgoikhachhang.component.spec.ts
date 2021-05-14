import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgoikhachhangComponent } from './showgoikhachhang.component';

describe('ShowgoikhachhangComponent', () => {
  let component: ShowgoikhachhangComponent;
  let fixture: ComponentFixture<ShowgoikhachhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowgoikhachhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowgoikhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

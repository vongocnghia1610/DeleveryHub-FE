import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderkhachhangComponent } from './orderkhachhang.component';

describe('OrderkhachhangComponent', () => {
  let component: OrderkhachhangComponent;
  let fixture: ComponentFixture<OrderkhachhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderkhachhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderkhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

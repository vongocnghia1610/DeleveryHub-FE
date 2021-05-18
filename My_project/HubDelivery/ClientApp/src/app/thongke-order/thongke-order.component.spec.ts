import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongkeOrderComponent } from './thongke-order.component';

describe('ThongkeOrderComponent', () => {
  let component: ThongkeOrderComponent;
  let fixture: ComponentFixture<ThongkeOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongkeOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongkeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

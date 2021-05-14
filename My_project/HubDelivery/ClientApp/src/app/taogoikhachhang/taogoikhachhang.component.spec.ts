import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaogoikhachhangComponent } from './taogoikhachhang.component';

describe('TaogoikhachhangComponent', () => {
  let component: TaogoikhachhangComponent;
  let fixture: ComponentFixture<TaogoikhachhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaogoikhachhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaogoikhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

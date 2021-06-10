import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutnotloginComponent } from './layoutnotlogin.component';

describe('LayoutnotloginComponent', () => {
  let component: LayoutnotloginComponent;
  let fixture: ComponentFixture<LayoutnotloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutnotloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutnotloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateshippingpackageComponent } from './createshippingpackage.component';

describe('CreateshippingpackageComponent', () => {
  let component: CreateshippingpackageComponent;
  let fixture: ComponentFixture<CreateshippingpackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateshippingpackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateshippingpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

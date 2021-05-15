import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingpackageEnterpriseComponent } from './shippingpackage-enterprise.component';

describe('ShippingpackageEnterpriseComponent', () => {
  let component: ShippingpackageEnterpriseComponent;
  let fixture: ComponentFixture<ShippingpackageEnterpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingpackageEnterpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingpackageEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

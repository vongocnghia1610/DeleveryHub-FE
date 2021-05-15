import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprisedeliveryComponent } from './enterprisedelivery.component';

describe('EnterprisedeliveryComponent', () => {
  let component: EnterprisedeliveryComponent;
  let fixture: ComponentFixture<EnterprisedeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterprisedeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterprisedeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

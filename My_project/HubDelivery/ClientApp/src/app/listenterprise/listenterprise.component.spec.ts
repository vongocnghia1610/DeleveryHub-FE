import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { listEnterpriseComponent } from './listenterprise.component';

describe('listEnterpriseComponent', () => {
  let component: listEnterpriseComponent;
  let fixture: ComponentFixture<listEnterpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ listEnterpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(listEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmenterpriseComponent } from './confirmenterprise.component';

describe('ConfirmenterpriseComponent', () => {
  let component: ConfirmenterpriseComponent;
  let fixture: ComponentFixture<ConfirmenterpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmenterpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmenterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

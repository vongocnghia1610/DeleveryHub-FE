import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoiSoatAdminComponent } from './doisoatadmin.component';

describe('DoiSoatAdminComponent', () => {
  let component: DoiSoatAdminComponent;
  let fixture: ComponentFixture<DoiSoatAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoiSoatAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoiSoatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

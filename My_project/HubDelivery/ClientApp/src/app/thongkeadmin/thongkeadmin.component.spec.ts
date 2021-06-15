import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongKeAdminComponent } from './thongkeadmin.component';

describe('ThongKeAdminComponent', () => {
  let component: ThongKeAdminComponent;
  let fixture: ComponentFixture<ThongKeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongKeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongKeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

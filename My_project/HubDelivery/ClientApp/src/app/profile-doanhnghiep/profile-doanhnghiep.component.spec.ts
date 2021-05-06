import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDoanhnghiepComponent } from './profile-doanhnghiep.component';

describe('ProfileDoanhnghiepComponent', () => {
  let component: ProfileDoanhnghiepComponent;
  let fixture: ComponentFixture<ProfileDoanhnghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDoanhnghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDoanhnghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

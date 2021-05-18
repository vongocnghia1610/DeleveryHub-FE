import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuagoidoanhnghiepComponent } from './muagoidoanhnghiep.component';

describe('MuagoidoanhnghiepComponent', () => {
  let component: MuagoidoanhnghiepComponent;
  let fixture: ComponentFixture<MuagoidoanhnghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuagoidoanhnghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuagoidoanhnghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

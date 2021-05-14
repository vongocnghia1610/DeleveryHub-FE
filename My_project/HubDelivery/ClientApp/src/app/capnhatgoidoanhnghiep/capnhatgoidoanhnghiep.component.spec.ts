import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapnhatgoidoanhnghiepComponent } from './capnhatgoidoanhnghiep.component';

describe('CapnhatgoidoanhnghiepComponent', () => {
  let component: CapnhatgoidoanhnghiepComponent;
  let fixture: ComponentFixture<CapnhatgoidoanhnghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapnhatgoidoanhnghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapnhatgoidoanhnghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

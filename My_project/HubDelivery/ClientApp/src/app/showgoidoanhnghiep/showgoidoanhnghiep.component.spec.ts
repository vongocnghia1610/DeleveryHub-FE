import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgoidoanhnghiepComponent } from './showgoidoanhnghiep.component';

describe('ShowgoidoanhnghiepComponent', () => {
  let component: ShowgoidoanhnghiepComponent;
  let fixture: ComponentFixture<ShowgoidoanhnghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowgoidoanhnghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowgoidoanhnghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

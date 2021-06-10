import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailorderComponent } from './detailorder.component';

describe('DetailorderComponent', () => {
  let component: DetailorderComponent;
  let fixture: ComponentFixture<DetailorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

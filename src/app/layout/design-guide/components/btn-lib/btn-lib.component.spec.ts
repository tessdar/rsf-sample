import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLibComponent } from './btn-lib.component';

describe('BtnLibComponent', () => {
  let component: BtnLibComponent;
  let fixture: ComponentFixture<BtnLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

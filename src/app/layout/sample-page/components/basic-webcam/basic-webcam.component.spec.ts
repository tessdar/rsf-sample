import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWebcamComponent } from './basic-webcam.component';

describe('BasicWebcamComponent', () => {
  let component: BasicWebcamComponent;
  let fixture: ComponentFixture<BasicWebcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWebcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

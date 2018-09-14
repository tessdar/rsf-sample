import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLibComponent } from './icon-lib.component';

describe('IconLibComponent', () => {
  let component: IconLibComponent;
  let fixture: ComponentFixture<IconLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

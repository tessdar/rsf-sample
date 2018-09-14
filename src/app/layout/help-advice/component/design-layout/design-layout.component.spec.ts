import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLayoutComponent } from './design-layout.component';

describe('DesignLayoutComponent', () => {
  let component: DesignLayoutComponent;
  let fixture: ComponentFixture<DesignLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

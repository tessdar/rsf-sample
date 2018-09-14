import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheViewComponent } from './sche-view.component';

describe('ScheViewComponent', () => {
  let component: ScheViewComponent;
  let fixture: ComponentFixture<ScheViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

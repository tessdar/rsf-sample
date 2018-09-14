import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServComponent } from './new-serv.component';

describe('NewServComponent', () => {
  let component: NewServComponent;
  let fixture: ComponentFixture<NewServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

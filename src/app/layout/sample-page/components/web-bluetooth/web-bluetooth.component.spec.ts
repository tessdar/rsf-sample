import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebBluetoothComponent } from './web-bluetooth.component';

describe('WebBluetoothComponent', () => {
  let component: WebBluetoothComponent;
  let fixture: ComponentFixture<WebBluetoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebBluetoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebBluetoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

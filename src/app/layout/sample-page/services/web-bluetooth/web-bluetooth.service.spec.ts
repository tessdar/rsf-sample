import { TestBed } from '@angular/core/testing';

import { WebBluetoothService } from './web-bluetooth.service';

describe('WebBluetoothService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebBluetoothService = TestBed.get(WebBluetoothService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, async, inject } from '@angular/core/testing';

import { DeactGuard } from './deact.guard';

describe('DeactGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactGuard]
    });
  });

  it('should ...', inject([DeactGuard], (guard: DeactGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed, waitForAsync, inject } from '@angular/core/testing';

import { DeactGuard } from './deact.guard';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../shared/state/reducers';

describe('DeactGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactGuard],
      imports: [StoreModule.forRoot(reducers)]
    });
  });

  it('should ...', inject([DeactGuard], (guard: DeactGuard) => {
    expect(guard).toBeTruthy();
  }));
});

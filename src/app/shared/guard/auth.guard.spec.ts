import { TestBed, waitForAsync, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../shared/state/reducers';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
      imports: [StoreModule.forRoot(reducers)]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});

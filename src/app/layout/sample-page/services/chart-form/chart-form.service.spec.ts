import { TestBed, inject } from '@angular/core/testing';

import { ChartFormService } from './chart-form.service';

describe('ChartFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartFormService]
    });
  });

  it('should be created', inject([ChartFormService], (service: ChartFormService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ChartFormService } from './chart-form.service';
import { HttpClientModule } from '@angular/common/http';

describe('ChartFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartFormService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ChartFormService], (service: ChartFormService) => {
    expect(service).toBeTruthy();
  }));
});

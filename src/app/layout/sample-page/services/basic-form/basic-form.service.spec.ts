import { TestBed, inject } from '@angular/core/testing';

import { BasicFormService } from './basic-form.service';
import { HttpClientModule } from '@angular/common/http';

describe('BasicFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicFormService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([BasicFormService], (service: BasicFormService) => {
    expect(service).toBeTruthy();
  }));
});

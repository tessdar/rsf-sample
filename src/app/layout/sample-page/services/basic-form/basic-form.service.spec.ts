import { TestBed, inject } from '@angular/core/testing';

import { BasicFormService } from './basic-form.service';

describe('BasicFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicFormService]
    });
  });

  it('should be created', inject([BasicFormService], (service: BasicFormService) => {
    expect(service).toBeTruthy();
  }));
});

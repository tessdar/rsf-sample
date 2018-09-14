import { TestBed, inject } from '@angular/core/testing';

import { BasicCrudService } from './basic-crud.service';

describe('BasicCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicCrudService]
    });
  });

  it('should be created', inject([BasicCrudService], (service: BasicCrudService) => {
    expect(service).toBeTruthy();
  }));
});

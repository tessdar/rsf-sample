import { TestBed, inject } from '@angular/core/testing';

import { BasicCrudService } from './basic-crud.service';
import { HttpClientModule } from '@angular/common/http';

describe('BasicCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicCrudService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([BasicCrudService], (service: BasicCrudService) => {
    expect(service).toBeTruthy();
  }));
});

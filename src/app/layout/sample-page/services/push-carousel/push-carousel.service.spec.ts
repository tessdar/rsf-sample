import { TestBed } from '@angular/core/testing';

import { PushCarouselService } from './push-carousel.service';

describe('PushCarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PushCarouselService = TestBed.get(PushCarouselService);
    expect(service).toBeTruthy();
  });
});

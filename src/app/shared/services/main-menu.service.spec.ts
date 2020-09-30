import { TestBed, inject } from '@angular/core/testing';

import { MainMenuService } from './main-menu.service';
import { HttpClientModule } from '@angular/common/http';

describe('MainMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainMenuService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([MainMenuService], (service: MainMenuService) => {
    expect(service).toBeTruthy();
  }));
});

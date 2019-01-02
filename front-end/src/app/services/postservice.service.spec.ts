import { TestBed, inject } from '@angular/core/testing';

import { PostserviceService } from './postservice.service';

describe('PostserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostserviceService]
    });
  });

  it('should be created', inject([PostserviceService], (service: PostserviceService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { NortificationService } from './nortification.service';

describe('NortificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NortificationService]
    });
  });

  it('should be created', inject([NortificationService], (service: NortificationService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { StandupService } from './standup.service';

describe('StandupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandupService]
    });
  });

  it('should be created', inject([StandupService], (service: StandupService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { SlackService } from './slack.service';

describe('SlackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlackService]
    });
  });

  it('should be created', inject([SlackService], (service: SlackService) => {
    expect(service).toBeTruthy();
  }));
});

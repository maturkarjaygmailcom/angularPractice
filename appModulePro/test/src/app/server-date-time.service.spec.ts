import { TestBed } from '@angular/core/testing';

import { ServerDateTimeService } from './server-date-time.service';

describe('ServerDateTimeService', () => {
  let service: ServerDateTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerDateTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

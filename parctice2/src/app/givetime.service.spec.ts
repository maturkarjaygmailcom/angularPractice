import { TestBed } from '@angular/core/testing';

import { GivetimeService } from './givetime.service';

describe('GivetimeService', () => {
  let service: GivetimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GivetimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

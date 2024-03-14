import { TestBed } from '@angular/core/testing';

import { EmpCarsService } from './emp-cars.service';

describe('EmpCarsService', () => {
  let service: EmpCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

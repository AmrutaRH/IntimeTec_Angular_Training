import { TestBed } from '@angular/core/testing';

import { AllbusService } from './allbus.service';

describe('AllbusService', () => {
  let service: AllbusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllbusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

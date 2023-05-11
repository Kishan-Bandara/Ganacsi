import { TestBed } from '@angular/core/testing';

import { VehicleSaleService } from './vehicle-sale.service';

describe('VehicleSaleService', () => {
  let service: VehicleSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

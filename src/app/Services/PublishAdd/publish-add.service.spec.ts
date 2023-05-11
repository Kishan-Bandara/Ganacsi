import { TestBed } from '@angular/core/testing';

import { PublishAddService } from './publish-add.service';

describe('PublishAddService', () => {
  let service: PublishAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

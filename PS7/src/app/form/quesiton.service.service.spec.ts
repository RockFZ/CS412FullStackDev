import { TestBed } from '@angular/core/testing';

import { QuesitonService } from './quesiton.service.service';

describe('Quesiton.ServiceService', () => {
  let service: QuesitonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuesitonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MeucepService } from './meucep.service';

describe('MeucepService', () => {
  let service: MeucepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeucepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

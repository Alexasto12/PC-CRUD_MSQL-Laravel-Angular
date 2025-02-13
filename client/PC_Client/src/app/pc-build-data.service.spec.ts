import { TestBed } from '@angular/core/testing';

import { PcBuildDataService } from './pc-build-data.service';

describe('PcBuildDataService', () => {
  let service: PcBuildDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcBuildDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

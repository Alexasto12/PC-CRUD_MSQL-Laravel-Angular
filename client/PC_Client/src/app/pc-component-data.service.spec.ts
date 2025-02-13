import { TestBed } from '@angular/core/testing';

import { PcComponentDataService } from './pc-component-data.service';

describe('PcComponentDataService', () => {
  let service: PcComponentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcComponentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PhimService } from './phim.service';

describe('PhimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhimService = TestBed.get(PhimService);
    expect(service).toBeTruthy();
  });
});

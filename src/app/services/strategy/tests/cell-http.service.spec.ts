import { TestBed } from '@angular/core/testing';

import { CellHttpService } from '../cell-http.service';

describe('CellHttpService', () => {
  let service: CellHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

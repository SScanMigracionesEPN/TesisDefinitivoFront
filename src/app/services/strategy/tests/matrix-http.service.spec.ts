import { TestBed } from '@angular/core/testing';

import { MatrixHttpService } from '../matrix-http.service';

describe('MatrixHttpService', () => {
  let service: MatrixHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrixHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

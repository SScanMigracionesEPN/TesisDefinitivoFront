import { TestBed } from '@angular/core/testing';

import { LinkHttpService } from '../link-http.service';

describe('LinkHttpService', () => {
  let service: LinkHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

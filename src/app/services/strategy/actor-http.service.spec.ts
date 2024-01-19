import { TestBed } from '@angular/core/testing';

import { ActorHttpService } from './actor-http.service';

describe('ActorHttpService', () => {
  let service: ActorHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

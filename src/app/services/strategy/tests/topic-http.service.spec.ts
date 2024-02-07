import { TestBed } from '@angular/core/testing';

import { TopicHttpService } from '../topic-http.service';

describe('TopicHttpService', () => {
  let service: TopicHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { YoutubeInterceptorService } from './youtube-interceptor.service';

describe('YoutubeInterceptorService', () => {
  let service: YoutubeInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

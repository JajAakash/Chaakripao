import { TestBed } from '@angular/core/testing';

import { PostjobService } from './jobpost/postjob.service';

describe('PostjobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostjobService = TestBed.get(PostjobService);
    expect(service).toBeTruthy();
  });
});

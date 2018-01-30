import { TestBed, inject } from '@angular/core/testing';

import { HippoContentService } from './hippo-content.service';

describe('HippoContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HippoContentService]
    });
  });

  it('should be created', inject([HippoContentService], (service: HippoContentService) => {
    expect(service).toBeTruthy();
  }));
});

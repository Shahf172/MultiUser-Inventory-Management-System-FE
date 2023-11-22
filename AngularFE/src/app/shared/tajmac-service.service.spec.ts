import { TestBed, inject } from '@angular/core/testing';

import { TajmacServiceService } from './tajmac-service.service';

describe('TajmacServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TajmacServiceService]
    });
  });

  it('should be created', inject([TajmacServiceService], (service: TajmacServiceService) => {
    expect(service).toBeTruthy();
  }));
});

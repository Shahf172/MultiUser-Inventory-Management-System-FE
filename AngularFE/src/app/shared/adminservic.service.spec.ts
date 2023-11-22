import { TestBed, inject } from '@angular/core/testing';

import { AdminservicService } from './adminservic.service';

describe('AdminservicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminservicService]
    });
  });

  it('should be created', inject([AdminservicService], (service: AdminservicService) => {
    expect(service).toBeTruthy();
  }));
});

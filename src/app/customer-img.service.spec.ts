import { TestBed } from '@angular/core/testing';

import { CustomerImgService } from './customer-img.service';

describe('CustomerImgService', () => {
  let service: CustomerImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

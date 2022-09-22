import { TestBed } from '@angular/core/testing';

import { HarcodedAuthenticationServiceService } from './harcoded-authentication-service.service';

describe('HarcodedAuthenticationServiceService', () => {
  let service: HarcodedAuthenticationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarcodedAuthenticationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

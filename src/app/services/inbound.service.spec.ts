import { TestBed } from '@angular/core/testing';

import { InboundService } from './inbound.service';

describe('InboundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InboundService = TestBed.get(InboundService);
    expect(service).toBeTruthy();
  });
});

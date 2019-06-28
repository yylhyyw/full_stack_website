import { TestBed } from '@angular/core/testing';

import { CreatedealService } from './createdeal.service';

describe('CreatedealService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatedealService = TestBed.get(CreatedealService);
    expect(service).toBeTruthy();
  });
});

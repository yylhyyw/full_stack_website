import { TestBed, async, inject } from '@angular/core/testing';

import { CompanyAuthGuard } from './company-auth.guard';

describe('CompanyAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyAuthGuard]
    });
  });

  it('should ...', inject([CompanyAuthGuard], (guard: CompanyAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});

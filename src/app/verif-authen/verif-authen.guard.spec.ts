import { TestBed, async, inject } from '@angular/core/testing';

import { VerifAuthenGuard } from './verif-authen.guard';

describe('VerifAuthenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifAuthenGuard]
    });
  });

  it('should ...', inject([VerifAuthenGuard], (guard: VerifAuthenGuard) => {
    expect(guard).toBeTruthy();
  }));
});

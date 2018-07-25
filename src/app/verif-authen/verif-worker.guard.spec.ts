import { TestBed, async, inject } from '@angular/core/testing';

import { VerifWorkerGuard } from './verif-worker.guard';

describe('VerifWorkerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifWorkerGuard]
    });
  });

  it('should ...', inject([VerifWorkerGuard], (guard: VerifWorkerGuard) => {
    expect(guard).toBeTruthy();
  }));
});

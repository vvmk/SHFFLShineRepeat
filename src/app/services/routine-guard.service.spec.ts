import { TestBed, inject } from '@angular/core/testing';

import { RoutineViewGuard } from './routine-guard.service';

describe('RoutineViewGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutineViewGuard]
    });
  });

  it('should be created', inject([RoutineViewGuard], (service: RoutineViewGuard) => {
    expect(service).toBeTruthy();
  }));
});

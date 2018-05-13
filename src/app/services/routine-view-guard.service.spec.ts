import { TestBed, inject } from '@angular/core/testing';

import { RoutineViewGuardService } from './routine-view-guard.service';

describe('RoutineViewGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutineViewGuardService]
    });
  });

  it('should be created', inject([RoutineViewGuardService], (service: RoutineViewGuardService) => {
    expect(service).toBeTruthy();
  }));
});

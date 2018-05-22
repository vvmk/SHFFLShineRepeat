import { TestBed, inject } from '@angular/core/testing';

import { RoutineFormGuardService } from './routine-form-guard.service';

describe('RoutineFormGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutineFormGuardService]
    });
  });

  it('should be created', inject([RoutineFormGuardService], (service: RoutineFormGuardService) => {
    expect(service).toBeTruthy();
  }));
});

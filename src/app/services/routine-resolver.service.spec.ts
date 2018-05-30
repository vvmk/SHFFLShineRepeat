import { TestBed, inject } from '@angular/core/testing';

import { RoutineResolverService } from './routine-resolver.service';

describe('RoutineResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutineResolverService]
    });
  });

  it('should be created', inject([RoutineResolverService], (service: RoutineResolverService) => {
    expect(service).toBeTruthy();
  }));
});

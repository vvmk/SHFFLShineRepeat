import { TestBed, inject } from '@angular/core/testing';

import { RoutineResolverService } from './routine-resolver.service';
import { RoutineService } from './routine.service';
import { Routine } from '../interfaces/routine';
import { Router } from '@angular/router';

describe('RoutineResolverService', () => {

  const mockRoutineService = jasmine.createSpyObj('RoutineService', ['getRoutineById']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoutineResolverService,
        { provide: RoutineService, useValue: mockRoutineService },
        { provide: Router, userValue: mockRouter }
      ]
    });
  });

  it('should be created', inject([RoutineResolverService], (service: RoutineResolverService) => {
    expect(service).toBeTruthy();
  }));
});

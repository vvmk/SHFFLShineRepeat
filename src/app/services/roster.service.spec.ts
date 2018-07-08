import { TestBed, inject } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RosterService]
    });
  });

  it('should be created', inject([RosterService], (service: RosterService) => {
    expect(service).toBeTruthy();
  }));

  it('should return the full roster + \'Any\' (27)', inject([RosterService], (service: RosterService) => {
    expect(service.getRoster().length).toEqual(27);
  }));
});

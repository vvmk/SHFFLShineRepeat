import { TestBed, inject } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService', () => {
  let rosterService: RosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RosterService]
    });
  });

  rosterService = TestBed.get(RosterService);

  it('should be created', inject([RosterService], (service: RosterService) => {
    expect(service).toBeTruthy();
  }));

  it('should return the full roster + \'Any\' (27)', inject([RosterService], (service: RosterService) => {
    expect(service.getRoster().length).toEqual(27);
  }));

  it('should normalize character names for image urls', () => {
    const name = "Mr. Game & Watch";

    const expected = "mrgame&watch";
    const actual = rosterService.normalizeName(name);

    expect(actual).toEqual(expected);
  });
});

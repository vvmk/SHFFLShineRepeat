import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { EndpointService } from './endpoint.service';

import { UserService } from './user.service';

describe('UserService', () => {

  const mEndpointService = jasmine.createSpyObj('EndpointService', ['userURL']);
  const mHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post']);
  const mAuthService = jasmine.createSpyObj('AuthService', ['isLoggedIn']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService,
      { provide: HttpClient, useValue: mHttpClient },
      { provide: EndpointService, useValue: mEndpointService },
      { provide: AuthService, useValue: mAuthService }
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});

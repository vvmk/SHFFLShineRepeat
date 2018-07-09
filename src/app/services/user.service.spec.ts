import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { EndpointService } from './endpoint.service';
import { MockUser } from '../../testing/mock-resources';
import { asyncData } from '../../testing/async-helpers';

import { UserService } from './user.service';

describe('UserService', () => {

  let userService: UserService;
  let endpointServiceSpy = jasmine.createSpyObj('EndpointService', ['userURL']);
  let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
  let authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);

  const fakeUrl = 'https://example.com/user/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService,
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: EndpointService, useValue: endpointServiceSpy },
        { provide: AuthService, useValue: authServiceSpy }
      ]
    });

    userService = TestBed.get(UserService);
    authServiceSpy = TestBed.get(AuthService);
    httpClientSpy = TestBed.get(HttpClient);
    endpointServiceSpy = TestBed.get(EndpointService);

  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should make an http GET request for a user', fakeAsync(() => {
    let testUser = new MockUser();
    httpClientSpy.get.and.returnValue(asyncData(testUser));

    userService.getUser(testUser.user_id).subscribe(
      user => expect(user).toEqual(testUser),
      fail
    );
  }));
});

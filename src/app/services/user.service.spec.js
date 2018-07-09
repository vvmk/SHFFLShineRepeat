"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var auth_service_1 = require("./auth.service");
var endpoint_service_1 = require("./endpoint.service");
var mock_resources_1 = require("../../testing/mock-resources");
var user_service_1 = require("./user.service");
describe('UserService', function () {
    var userService;
    var endpointServiceSpy = jasmine.createSpyObj('EndpointService', ['userURL']);
    var httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    var authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    var fakeUrl = 'https://example.com/user/1';
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [user_service_1.UserService,
                { provide: http_1.HttpClient, useValue: httpClientSpy },
                { provide: endpoint_service_1.EndpointService, useValue: endpointServiceSpy },
                { provide: auth_service_1.AuthService, useValue: authServiceSpy }
            ]
        });
        userService = testing_1.TestBed.get(user_service_1.UserService);
        authServiceSpy = testing_1.TestBed.get(auth_service_1.AuthService);
        httpClientSpy = testing_1.TestBed.get(http_1.HttpClient);
        endpointServiceSpy = testing_1.TestBed.get(endpoint_service_1.EndpointService);
    });
    it('should be created', testing_1.inject([user_service_1.UserService], function (service) {
        expect(service).toBeTruthy();
    }));
    it('should GET data for current user if no id is provided', function () {
        endpointServiceSpy.userURL.and.returnValue(fakeUrl);
        spyOnProperty(authServiceSpy, 'currentUserId', 'get').and.returnValue(1);
        // TODO: this doesn't need to stay
        expect(authServiceSpy.currentUserId).toBe(1);
    });
    it('should GET an existing user if given an id', function () {
        var testUser = new mock_resources_1.MockUser();
        httpClientSpy.get.and.returnValue(asyncData(testUser));
        userService.getUser(testUser.user_id).subscribe(function (user) { return expect(user).toEqual(testUser); }, fail);
    });
    it('should register a new user', function () {
    });
});

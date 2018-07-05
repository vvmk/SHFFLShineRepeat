"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var EndpointService = /** @class */ (function () {
    function EndpointService() {
        this.baseUrl = 'http://localhost:8080';
    }
    // NOTE: URLs consisting of the base url plus one word
    // (i.e.  baseURL/confirm)
    // are omitted from this service, just type 'em
    EndpointService.prototype.userURL = function (userId) {
        return this.baseUrl + "/users/" + userId;
    };
    EndpointService.prototype.getRoutineUrl = function (routineId) {
        return this.baseUrl + "/routines/" + routineId;
    };
    EndpointService.prototype.getLibraryURL = function (userId) {
        return this.baseUrl + "/users/" + userId + "/library";
    };
    EndpointService.prototype.userRoutineURL = function (userId) {
        return this.baseUrl + "/users/" + userId + "/routines";
    };
    EndpointService.prototype.forkRoutineURL = function (userId, routineId) {
        return this.baseUrl + "/users/" + userId + "/fork/" + routineId;
    };
    EndpointService = __decorate([
        core_1.Injectable()
    ], EndpointService);
    return EndpointService;
}());
exports.EndpointService = EndpointService;

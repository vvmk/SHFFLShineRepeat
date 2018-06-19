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
        this._baseUrl = 'http://localhost:8080';
        this._routineServiceId = 'ssrroutine';
        this._userServiceId = 'ssruser';
    }
    EndpointService.prototype.getRoutineServiceUrl = function () {
        return this.joinUrls(this._baseUrl, this._routineServiceId);
    };
    EndpointService.prototype.getUserServiceUrl = function () {
        return this.joinUrls(this._baseUrl, this._userServiceId);
    };
    EndpointService.prototype.getRoutineByIdUrl = function (id) {
        return this.joinUrls(this.getRoutineServiceUrl(), 'routines', id);
    };
    EndpointService.prototype.getLibraryUrl = function (userId) {
        return this.joinUrls(this.getRoutineServiceUrl(), 'library', userId);
    };
    EndpointService.prototype.getUserMetaUrl = function (userId) {
        return this.joinUrls(this.getUserServiceUrl(), 'users', userId);
    };
    EndpointService.prototype.joinUrls = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.join('/');
    };
    EndpointService = __decorate([
        core_1.Injectable()
    ], EndpointService);
    return EndpointService;
}());
exports.EndpointService = EndpointService;

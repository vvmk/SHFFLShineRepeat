"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService(_http, _e) {
        this._http = _http;
        this._e = _e;
        // for testing until authentication added to service tier
        this.userId = '1';
        // TODO: check local storage for current user, else request it
    }
    UserService.prototype.requestUser = function () {
        return this._http.get(this._e.getUserMetaUrl(this.userId));
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.setUser = function (u) {
        this.user = u;
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

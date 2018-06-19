"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var UserService = /** @class */ (function () {
    function UserService(_http, es) {
        this._http = _http;
        this.es = es;
        // for testing until authentication added to service tier
        this.userId = '1';
        this.currentUser = new rxjs_1.ReplaySubject(1);
    }
    UserService.prototype.getUser = function () {
        var _this = this;
        this._http.get(this.es.getUserMetaUrl(this.userId))
            .subscribe(function (res) { return _this.currentUser.next(res); });
        return this.currentUser;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.userLoggedIn;
    };
    UserService.prototype.logout = function () {
        this.userLoggedIn = false;
    };
    UserService.prototype.login = function (deets, callback) {
        var _this = this;
        var headers = new http_1.HttpHeaders(deets ? {
            authorization: 'Basic ' + btoa(deets.tag + ':' + deets.pw)
        } : {});
        this._http.get(this.es.getUserMetaUrl(this.userId), { headers: headers }).subscribe(function (res) {
            if (res['tag']) {
                _this.userLoggedIn = true;
            }
            else {
                _this.userLoggedIn = false;
            }
        });
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

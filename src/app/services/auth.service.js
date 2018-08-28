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
var operators_1 = require("rxjs/operators");
var AuthService = /** @class */ (function () {
    function AuthService(http, es) {
        this.http = http;
        this.es = es;
    }
    AuthService.prototype.isLoggedIn = function () {
        return !!this.currentUserId;
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var url = this.es.baseUrl + '/login';
        var basicAuthString = 'Basic ' + btoa(email + ':' + password);
        var headers = new http_1.HttpHeaders({ authorization: basicAuthString });
        return this.http.post(url, {}, { headers: headers }).pipe(operators_1.tap(function (res) { return _this.setSession(res); }), operators_1.shareReplay());
    };
    AuthService.prototype.setSession = function (data) {
        var expiresAt = Date.now() + 172800000;
        localStorage.setItem('access_token', data['access_token']);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt));
        localStorage.setItem('user_id', data['user']['user_id']);
    };
    AuthService.prototype.logout = function () {
        this.currentUserId = null;
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('user_id');
    };
    AuthService.prototype.getExpiration = function () {
        var expiration = localStorage.getItem('expires_at');
        return JSON.parse(expiration);
    };
    AuthService.prototype.verifyCurrentUser = function () {
        this.currentUserId = +localStorage.getItem('user_id');
    };
    AuthService.prototype.confirm = function (uid, token) {
        var _this = this;
        var body = {
            uid: uid,
            token: token
        };
        var url = this.es.baseUrl + '/confirm';
        return this.http.post(url, body).pipe(operators_1.tap(function (res) { return _this.setSession(res); }), operators_1.shareReplay());
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

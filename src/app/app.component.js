"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var routine_service_1 = require("./services/routine.service");
var user_service_1 = require("./services/user.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(_userService, _routineService) {
        this._userService = _userService;
        this._routineService = _routineService;
        this.title = 'SHFFL->Shine->Repeat';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.requestUser().subscribe(function (data) { return _this.setUser(data); });
        this._routineService.getUserRoutines('1').subscribe(function (data) { return _this.setLibrary(data); });
    };
    AppComponent.prototype.setUser = function (data) {
        this.user = data;
        this._userService.setUser(data);
    };
    AppComponent.prototype.setLibrary = function (data) {
        var routines = data['routines'];
        this._routineService.setLibrary(routines);
    };
    AppComponent.prototype.logout = function () {
        //TODO
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ssr-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [routine_service_1.RoutineService, user_service_1.UserService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

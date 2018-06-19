"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var RoutineService = /** @class */ (function () {
    function RoutineService(http, _e, _userService) {
        this.http = http;
        this._e = _e;
        this._userService = _userService;
        this.routineSubscription = new rxjs_1.ReplaySubject(1);
        this.routineLibrary = [];
    }
    RoutineService.prototype.getUserRoutines = function () {
        var _this = this;
        var url = this._e.getLibraryUrl(this._userService.userId);
        this.http.get(url).subscribe(function (res) {
            _this.routineSubscription.next(res);
            res['routines'].map(function (r) {
                _this.routineLibrary[r.routine_id] = r;
            });
        });
        return this.routineSubscription;
    };
    RoutineService.prototype.getRoutineById = function (routineId) {
        var url = this._e.getRoutineByIdUrl(routineId);
        return this.http.get(url);
    };
    RoutineService.prototype.isValidRoutineId = function (id) {
        return id < this.routineLibrary.length;
    };
    RoutineService = __decorate([
        core_1.Injectable()
    ], RoutineService);
    return RoutineService;
}());
exports.RoutineService = RoutineService;

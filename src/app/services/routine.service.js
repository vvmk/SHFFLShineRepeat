"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var RoutineService = /** @class */ (function () {
    function RoutineService(_http, _e) {
        this._http = _http;
        this._e = _e;
        // TODO: check local storage for user's library, set it if found
        // else: this.routineLibrary = this.getUserRoutines();
    }
    // TODO: Get the users library and store it locally
    RoutineService.prototype.getUserRoutines = function (userId) {
        var url = this._e.getLibraryUrl(userId);
        return this._http.get(url).pipe(operators_1.catchError(this.handleError));
    };
    RoutineService.prototype.handleError = function (err) {
        console.log(err.message);
        return rxjs_1.throwError(err.message);
    };
    RoutineService.prototype.getRoutineById = function (routineId) {
        return this.routineLibrary[routineId];
    };
    RoutineService.prototype.getLibrary = function () {
        return this.routineLibrary;
    };
    RoutineService.prototype.setLibrary = function (library) {
        this.routineLibrary = library;
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

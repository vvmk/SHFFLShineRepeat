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
var http_1 = require("@angular/common/http");
var RoutineService = /** @class */ (function () {
    function RoutineService(http, es, authService, userService) {
        this.http = http;
        this.es = es;
        this.authService = authService;
        this.userService = userService;
        this.routineLibrary = [];
        this.userLibrary = [];
    }
    RoutineService.prototype.getUserRoutines = function () {
        var userId = +localStorage.getItem('user_id');
        var url = this.es.getLibraryURL(userId);
        return this.http.get(url);
    };
    RoutineService.prototype.getRoutineById = function (routineId) {
        if (routineId === 0) {
            console.log('edit routine with routine_id: 0. not cool');
            return rxjs_1.of(this.initializeRoutine());
        }
        var url = this.es.getRoutineURL(routineId);
        return this.http.get(url).pipe(operators_1.catchError(this.handleError));
    };
    RoutineService.prototype.saveRoutine = function (routine) {
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        var options = { headers: headers };
        if (routine.routine_id === 0) {
            return this.createRoutine(routine, options);
        }
        return this.updateRoutine(routine, options);
    };
    // TODO: verify deletion somehow, right now there's no going back
    RoutineService.prototype.deleteRoutine = function (routineId) {
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        var options = { headers: headers };
        var url = this.es.getRoutineURL(routineId);
        return this.http["delete"](url, options);
    };
    RoutineService.prototype.isValidRoutineId = function (id) {
        return id < this.routineLibrary.length;
    };
    RoutineService.prototype.initializeRoutine = function () {
        var userId = this.authService.currentUserId;
        return {
            routine_id: 0,
            title: null,
            total_duration: 0,
            character: null,
            original_creator_id: userId,
            creator_id: userId,
            drills: [],
            popularity: 0,
            created: 0
        };
    };
    RoutineService.prototype.createRoutine = function (routine, options) {
        var userId = this.authService.currentUserId;
        var url = this.es.userRoutineURL(userId);
        console.log(routine);
        var newRoutine = {
            title: routine.title,
            total_duration: routine.total_duration,
            character: routine.character,
            original_creator_id: routine.original_creator_id,
            creator_id: routine.creator_id,
            drills: routine.drills
        };
        return this.http.post(url, newRoutine, options).pipe(operators_1.catchError(this.handleError));
    };
    RoutineService.prototype.updateRoutine = function (routine, options) {
        var userId = this.authService.currentUserId;
        var url = this.es.userRoutineURL(userId, routine.routine_id);
        console.log(routine);
        return this.http.put(url, routine, options).pipe(operators_1.map(function () { return routine; }), operators_1.catchError(this.handleError));
    };
    // TODO: handleError
    RoutineService.prototype.handleError = function (error) {
        return rxjs_1.of(null);
    };
    RoutineService = __decorate([
        core_1.Injectable()
    ], RoutineService);
    return RoutineService;
}());
exports.RoutineService = RoutineService;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var LibraryPageComponent = /** @class */ (function () {
    function LibraryPageComponent(routineService, userService, authService) {
        this.routineService = routineService;
        this.userService = userService;
        this.authService = authService;
        this.user = {};
        this.routines = [];
    }
    LibraryPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.authService.currentUserId;
        this.userService.getUser().subscribe(function (u) { return _this.user = u; });
        this.routineService.getUserRoutines()
            .subscribe(function (r) { return _this.routines = r; });
    };
    LibraryPageComponent = __decorate([
        core_1.Component({
            templateUrl: './library-page.component.html',
            styleUrls: ['./library-page.component.scss']
        })
    ], LibraryPageComponent);
    return LibraryPageComponent;
}());
exports.LibraryPageComponent = LibraryPageComponent;

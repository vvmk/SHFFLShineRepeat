"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var RoutineListComponent = /** @class */ (function () {
    function RoutineListComponent(routineService) {
        this.routineService = routineService;
        //
    }
    RoutineListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], RoutineListComponent.prototype, "routines");
    RoutineListComponent = __decorate([
        core_1.Component({
            selector: 'ssr-routine-list',
            templateUrl: './routine-list.component.html',
            styleUrls: ['./routine-list.component.scss']
        })
    ], RoutineListComponent);
    return RoutineListComponent;
}());
exports.RoutineListComponent = RoutineListComponent;

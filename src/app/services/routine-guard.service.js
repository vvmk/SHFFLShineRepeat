"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var RoutineViewGuard = /** @class */ (function () {
    function RoutineViewGuard(_router, _routineService) {
        this._router = _router;
        this._routineService = _routineService;
    }
    RoutineViewGuard.prototype.canActivate = function (route) {
        var id = route.url[1].path;
        if (!this._routineService.isValidRoutineId(+id)) {
            // TODO: reroute to 404 page (when there is one)
            this._router.navigate(['404']);
            return false;
        }
        return true;
    };
    RoutineViewGuard = __decorate([
        core_1.Injectable()
    ], RoutineViewGuard);
    return RoutineViewGuard;
}());
exports.RoutineViewGuard = RoutineViewGuard;
var RoutineFormGuard = /** @class */ (function () {
    function RoutineFormGuard() {
    }
    RoutineFormGuard.prototype.canDeactivate = function (component) {
        if (component.routineForm.dirty) {
            return confirm('Navigate away and lose all changes to this routine?');
        }
        return true;
    };
    RoutineFormGuard = __decorate([
        core_1.Injectable()
    ], RoutineFormGuard);
    return RoutineFormGuard;
}());
exports.RoutineFormGuard = RoutineFormGuard;

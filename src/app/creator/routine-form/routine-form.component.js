"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RoutineFormComponent = /** @class */ (function () {
    function RoutineFormComponent(_userService, _rosterService, _guard, fb) {
        this._userService = _userService;
        this._rosterService = _rosterService;
        this._guard = _guard;
        this.fb = fb;
    }
    Object.defineProperty(RoutineFormComponent.prototype, "drills", {
        get: function () {
            return this.routineForm.get('drills');
        },
        enumerable: true,
        configurable: true
    });
    RoutineFormComponent.prototype.ngOnInit = function () {
        this.roster = this._rosterService.getRoster();
        this.routineForm = this.fb.group({
            routineTitle: ['',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(50)
                ]
            ],
            routineCharacter: ['', forms_1.Validators.required],
            drills: this.fb.array([this.buildDrill()])
        });
    };
    RoutineFormComponent.prototype.addDrill = function () {
        this.drills.push(this.buildDrill());
    };
    RoutineFormComponent.prototype.buildDrill = function () {
        return this.fb.group({
            drillTitle: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(50)
                ]],
            drillDuration: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.min(1),
                    forms_1.Validators.max(5940)
                ]]
        });
    };
    RoutineFormComponent.prototype.removeDrill = function (id) {
        this.drills.removeAt(id);
    };
    RoutineFormComponent.prototype.save = function () {
        console.log('saving: ' + this.routineForm);
    };
    RoutineFormComponent = __decorate([
        core_1.Component({
            selector: 'ssr-creator-routine-form',
            templateUrl: './routine-form.component.html',
            styleUrls: ['./routine-form.component.css']
        })
    ], RoutineFormComponent);
    return RoutineFormComponent;
}());
exports.RoutineFormComponent = RoutineFormComponent;

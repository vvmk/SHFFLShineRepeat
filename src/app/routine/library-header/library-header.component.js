"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var LibraryHeaderComponent = /** @class */ (function () {
    function LibraryHeaderComponent(rosterService) {
        this.rosterService = rosterService;
        this.followOrEdit = 'Edit';
        this.avatar = 'assets/images/avatar-Default.png';
    }
    LibraryHeaderComponent.prototype.ngOnInit = function () {
    };
    LibraryHeaderComponent.prototype.followEdit = function () {
        console.log('follow/edit not yet implemented');
    };
    __decorate([
        core_1.Input()
    ], LibraryHeaderComponent.prototype, "user");
    LibraryHeaderComponent = __decorate([
        core_1.Component({
            selector: 'ssr-library-header',
            templateUrl: './library-header.component.html',
            styleUrls: ['./library-header.component.scss']
        })
    ], LibraryHeaderComponent);
    return LibraryHeaderComponent;
}());
exports.LibraryHeaderComponent = LibraryHeaderComponent;

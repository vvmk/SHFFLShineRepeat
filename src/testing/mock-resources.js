"use strict";
exports.__esModule = true;
var MockRoutine = /** @class */ (function () {
    function MockRoutine(routine_id, title, total_duration, character, original_creator_id, creator_id, created, popularity, drills) {
        if (routine_id === void 0) { routine_id = 1; }
        if (title === void 0) { title = "title"; }
        if (total_duration === void 0) { total_duration = 60; }
        if (character === void 0) { character = "Falco"; }
        if (original_creator_id === void 0) { original_creator_id = 1; }
        if (creator_id === void 0) { creator_id = 1; }
        if (created === void 0) { created = Date.now(); }
        if (popularity === void 0) { popularity = 1; }
        if (drills === void 0) { drills = [
            new MockDrill("drill 1", 30),
            new MockDrill("drill 2", 30)
        ]; }
        this.routine_id = routine_id;
        this.title = title;
        this.total_duration = total_duration;
        this.character = character;
        this.original_creator_id = original_creator_id;
        this.creator_id = creator_id;
        this.created = created;
        this.popularity = popularity;
        this.drills = drills;
    }
    return MockRoutine;
}());
exports.MockRoutine = MockRoutine;
var MockUser = /** @class */ (function () {
    function MockUser(user_id, email, tag, main, bio) {
        if (user_id === void 0) { user_id = 1; }
        if (email === void 0) { email = "user@example.com"; }
        if (tag === void 0) { tag = "vvmk"; }
        if (main === void 0) { main = "Falco"; }
        if (bio === void 0) { bio = "Tries really hard"; }
        this.user_id = user_id;
        this.email = email;
        this.tag = tag;
        this.main = main;
        this.bio = bio;
    }
    return MockUser;
}());
exports.MockUser = MockUser;
var MockDrill = /** @class */ (function () {
    function MockDrill(drill_title, duration) {
        if (drill_title === void 0) { drill_title = "some drill"; }
        if (duration === void 0) { duration = 30; }
        this.drill_title = drill_title;
        this.duration = duration;
    }
    return MockDrill;
}());
exports.MockDrill = MockDrill;

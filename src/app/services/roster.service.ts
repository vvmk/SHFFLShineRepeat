import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RosterService {
    roster: string[];

    constructor() {
        this.roster = [
            'Falco',
            'Fox',
            'Marth',
            'Captain Falcon',
            'Peach',
            'Jigglypuff',
            'Sheik',
            'Samus',
            'Ice Climbers',
            'Ganondorf',
            'Ness',
            'Yoshi',
            'DK',
            'Mario',
            'Doctor Mario',
            'Luigi',
            'Bowser',
            'Link',
            'Young Link',
            'Pichu',
            'Zelda',
            'Mr. Game & Watch',
            'Kirby',
            'Mewtwo',
            'Roy'
        ];
    }

    getRoster(): string[] {
        return this.roster;
    }
}

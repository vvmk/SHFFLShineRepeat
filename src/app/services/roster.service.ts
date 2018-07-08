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
            'Sheik',
            'Jigglypuff',
            'Ice Climbers',
            'Pikachu',
            'Samus',
            'Ganondorf',
            'Mr. Game & Watch',
            'Yoshi',
            'Young Link',
            'Mario',
            'Luigi',
            'Dr. Mario',
            'Link',
            'Bowser',
            'Ness',
            'DK',
            'Zelda',
            'Kirby',
            'Mewtwo',
            'Pichu',
            'Roy',
            'Any'
        ];
    }

    getRoster(): string[] {
        return this.roster;
    }
}

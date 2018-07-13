import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RosterService {
    roster: string[];
    stockIconBaseUrl = 'assets/images/stock_icons/stock_icon_';
    listPortraitBaseUrl = 'assets/images/routine-list-avatars/list_avatar_';

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

    getStockIconUrl(characterName: string): string {
        return this.stockIconBaseUrl + 
            this.normalizeName(characterName) + '.png';
    }

    getListPortraitUrl(characterName: string): string {
        return this.listPortraitBaseUrl +
            this.normalizeName(characterName);
    }

    normalizeName(name: string): string {
        return name.replace(/(\s*|\.)/,'').toLowerCase();
    }
}

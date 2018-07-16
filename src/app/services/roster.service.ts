import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RosterService {
    roster: string[];
    stockIconBaseUrl = 'assets/images/stock-icons/stock_icon_';
    listPortraitBaseUrl = 'assets/images/routine-list-avatars/list_avatar_';
    cssPortraitBaseUrl = 'assets/images/css-portraits/css_portrait_';

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
            this.normalizeName(characterName) + '.png';
    }

    getCssPortraitUrl(characterName: string): string {
        return this.cssPortraitBaseUrl +
            this.normalizeName(characterName)  + '.png';
    }

    normalizeName(name: string = 'default'): string {
        return name.replace(/\W/g,"").toLowerCase();
    }
}

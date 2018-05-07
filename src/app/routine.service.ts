import { Injectable } from '@angular/core';
import { Routine } from './interfaces/routine';

@Injectable()
export class RoutineService {

    constructor() { }

    getRoutines(): Routine[] {
        const testRoutine: Routine =
        {
            'routineId': '1',
            'title': 'Falco - basic',
            'duration': 45,
            'character': 'Falco',
            'creatorTag': 'vvmk',
            'creatorId': '1',
            'creationDate': '5/7/18',
            'popularity': 14,
            'commentsEnabled': true,
            'drills': [
            {
                'title': 'Dash->Wavedash',
                'duration': 10
            },
            {
                'title': 'Short hop->Laser',
                'duration': 15
            },
            {
                'title': 'Wavedash (long)',
                'duration': 20
            }
            ],
            'comments': []
        }

        return [testRoutine];
    }
}

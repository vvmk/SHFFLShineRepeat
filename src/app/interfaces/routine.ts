import { Drill } from './drill';
import { Comment } from './comment';

export interface Routine {
    routine_id: number;
    title: string;
    total_duration: number;
    character: string;
    original_creator_id: number;
    creator_id: number;
    created: number;
    popularity: number;
    drills: Drill[];
}

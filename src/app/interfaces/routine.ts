import { Drill } from './drill';
import { Comment } from './comment';

export interface Routine {
    routine_id: string;
    title: string;
    total_duration: number;
    character: string;
    creator_tag: string;
    creatorId: string;
    creation_date: string;
    popularity: number;
    drills: Drill[];
}

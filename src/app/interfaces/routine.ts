import { Drill } from './drill';
import { Comment } from './comment';

export interface Routine {
    routine_id: string;
    title: string;
    duration: number;
    character: string;
    creatorTag: string;
    creatorId: string;
    creationDate: string;
    popularity: number;
    commentsEnabled: boolean;
    drills: Drill[];
    comments: Comment[];
}
import { User } from './user';

export interface Profile {
    user: User;
    routines: {
        routine_id: string;
        title: string;
        total_duration: number;
        popularity: number;
        description?: string;
    }[];
}

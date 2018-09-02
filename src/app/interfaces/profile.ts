import { User } from './user';

export interface Profile {
    user: User;
    routine_headers: {
        routine_id: string;
        title: string;
        total_duration: number;
        character: string;
        popularity: number;
        description?: string;
    }[];
}

import { Routine } from '../app/interfaces/routine';
import { User } from '../app/interfaces/user';
import { Drill } from '../app/interfaces/drill';

class MockRoutine implements Routine {
  constructor(
    public routine_id: number = 1,
    public title: string = "title",
    public total_duration: number = 60,
    public character: string = "Falco",
    public original_creator_id: number = 1,
    public creator_id: number = 1,
    public created: number = Date.now(),
    public popularity: number = 1,
    public drills: Drill[] = [ new Drill(), new Drill() ]
  ) {}
}

class MockUser {
  constructor(
    public user_id: number = 1,
    public email: string = "user@example.com",
    public tag: string = "vvmk",
    public main: string = "Falco",
    public bio: string = "Tries really hard"
  ) {}
}

class MockDrill implements Drill {
  constructor(
    public drill_title: string = "drill 1",
    public duration: number = "drill 2"
  ) {}
}
export {
  MockRoutine,
  MockUser, 
  MockDrill
}

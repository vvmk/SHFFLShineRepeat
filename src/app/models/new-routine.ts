export class NewRoutine {
  constructor(
            public title = '',
            public total_duration = 0,
            public character = '',
            public original_creator_id = -1,
            public creator_id = -1,
            public drills = [],
            public description = '',
  ) {}
}

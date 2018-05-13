import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineListItemComponent } from './routine-list-item.component';

describe('RoutineListItemComponent', () => {
  let component: RoutineListItemComponent;
  let fixture: ComponentFixture<RoutineListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

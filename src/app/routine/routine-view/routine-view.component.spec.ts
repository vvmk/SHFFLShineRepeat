import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineViewComponent } from './routine-view.component';

describe('RoutineViewComponent', () => {
  let component: RoutineViewComponent;
  let fixture: ComponentFixture<RoutineViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

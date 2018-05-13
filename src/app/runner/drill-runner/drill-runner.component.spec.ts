import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillRunnerComponent } from './drill-runner.component';

describe('DrillRunnerComponent', () => {
  let component: DrillRunnerComponent;
  let fixture: ComponentFixture<DrillRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillRunnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

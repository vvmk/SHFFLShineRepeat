import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevLandingComponent } from './dev-landing.component';

describe('DevLandingComponent', () => {
  let component: DevLandingComponent;
  let fixture: ComponentFixture<DevLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

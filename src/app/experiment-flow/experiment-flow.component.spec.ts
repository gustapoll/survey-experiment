import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentFlowComponent } from './experiment-flow.component';

describe('ExperimentFlowComponent', () => {
  let component: ExperimentFlowComponent;
  let fixture: ComponentFixture<ExperimentFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

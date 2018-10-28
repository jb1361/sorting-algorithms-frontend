import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmGraphComponent } from './algorithm-graph.component';

describe('AlgorithmGraphComponent', () => {
  let component: AlgorithmGraphComponent;
  let fixture: ComponentFixture<AlgorithmGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

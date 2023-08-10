import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsActionsComponent } from './results-actions.component';

describe('ResultsActionsComponent', () => {
  let component: ResultsActionsComponent;
  let fixture: ComponentFixture<ResultsActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsActionsComponent]
    });
    fixture = TestBed.createComponent(ResultsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

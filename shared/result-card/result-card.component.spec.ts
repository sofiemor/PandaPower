import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCardComponent } from './result-card.component';

describe('ResultCardComponent', () => {
  let component: ResultCardComponent;
  let fixture: ComponentFixture<ResultCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultCardComponent]
    });
    fixture = TestBed.createComponent(ResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

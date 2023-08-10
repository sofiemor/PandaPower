import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CduChartComponent } from './cdu-chart.component';

describe('CduChartComponent', () => {
  let component: CduChartComponent;
  let fixture: ComponentFixture<CduChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CduChartComponent]
    });
    fixture = TestBed.createComponent(CduChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

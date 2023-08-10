import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinCostChartComponent } from './min-cost-chart.component';

describe('MinCostChartComponent', () => {
  let component: MinCostChartComponent;
  let fixture: ComponentFixture<MinCostChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinCostChartComponent]
    });
    fixture = TestBed.createComponent(MinCostChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

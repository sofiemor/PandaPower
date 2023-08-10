import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChartComponent } from './route-chart.component';

describe('RouteChartComponent', () => {
  let component: RouteChartComponent;
  let fixture: ComponentFixture<RouteChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteChartComponent]
    });
    fixture = TestBed.createComponent(RouteChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

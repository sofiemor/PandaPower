import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrelChartComponent } from './barrel-chart.component';

describe('BarrelChartComponent', () => {
  let component: BarrelChartComponent;
  let fixture: ComponentFixture<BarrelChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarrelChartComponent]
    });
    fixture = TestBed.createComponent(BarrelChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

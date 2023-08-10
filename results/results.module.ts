import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsPageComponent } from './results-page/results-page.component';
import { SharedModule } from '../shared/shared.module';
import { TitleCardComponent } from './title-card/title-card.component';
import { MinCostChartComponent } from './min-cost-chart/min-cost-chart.component';
import { BarrelChartComponent } from './barrel-chart/barrel-chart.component';


@NgModule({
  declarations: [
    ResultsPageComponent,
    TitleCardComponent,
    MinCostChartComponent,
    BarrelChartComponent,
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    SharedModule
  ]
})
export class ResultsModule { }

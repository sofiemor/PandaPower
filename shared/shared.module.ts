import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FootComponent } from './foot/foot.component';
import { ResultCardComponent } from './result-card/result-card.component';
import { RouteCardComponent } from './route-card/route-card.component';
import { RouteChartComponent } from './route-chart/route-chart.component';
import { CduCardComponent } from './cdu-card/cdu-card.component';
import { CduChartComponent } from './cdu-chart/cdu-chart.component';
import { NotesCardComponent } from './notes-card/notes-card.component';
import { ResultsActionsComponent } from './results-actions/results-actions.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FootComponent,
    ResultCardComponent,
    RouteCardComponent,
    RouteChartComponent,
    CduCardComponent,
    CduChartComponent,
    NotesCardComponent,
    ResultsActionsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    NavBarComponent,
    FootComponent,
    ResultCardComponent,
    RouteCardComponent,
    RouteChartComponent,
    CduCardComponent,
    CduChartComponent,
    NotesCardComponent,
    ResultsActionsComponent
  ]
})
export class SharedModule { }

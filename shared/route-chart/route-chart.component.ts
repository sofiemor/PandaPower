import { Component, OnInit, Input } from '@angular/core';
import { last, min } from 'rxjs';

@Component({
  selector: 'app-route-chart',
  templateUrl: './route-chart.component.html',
  styleUrls: ['./route-chart.component.css']
})
export class RouteChartComponent {

  routeTables: routeData[][] = [];
  mins: any[] = [];

  ngOnInit(): void {
    const instructions = history.state.instructions
    const summaryData = history.state.summaryData

    const table: any[] = []
    this.routeTables.push(table)

    for (let key of Object.keys(instructions)) {
        const row: routeData = {
          oilField: instructions[key].Origin,
          transportType: instructions[key]['Transport Type'],
          cost: instructions[key].Cost,
          numBarrels: instructions[key].Barrels,
          dest: instructions[key].Refinery,
          transportDesc: instructions[key]["Transport Desc"],
          oilType: instructions[key]['Crude']
        }

        table.push(row)
    }



    this.mins.push(summaryData['min_cost'])
    this.mins.push(summaryData['barrels'])

    console.log('hey: ', summaryData['maxProd'])
    if (summaryData['maxProd']) {
      console.log('model 2')
      this.mins[0] = summaryData['maxProd']['max_prod'][0]['Total_Cost']
      this.mins[1] = summaryData['maxProd']['max_prod'][0]['Total_Barrels']
    }
    table.push(this.mins)

    console.log('test', this.mins)
  }
}


export interface routeData {
  oilField: string;
  transportType: string;
  cost: number;
  numBarrels: number;
  dest: string;
  transportDesc: string;
  oilType: string;
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DynamoService } from 'src/app/shared/dynamo.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})

export class ResultsPageComponent{
  constructor(private ddb: DynamoService, private router: Router){}

  caseObj: any;
  isSaved = false;
  name = "";
  refineries: string[] = [];
  crudeType = "";
  minCost = "";
  numBarrels = 0;
  minCostPerRef: string[] = [];
  costLabel = 'Minimum Cost';
  prodTypeLabels: string[] = ['Gasoline', 'Distillate', 'Light End']
  gasPerRef: string[] = [];
  distillatePerRef: string[]= [];
  lightEndPerRef: string[] = [];
  cduUtils: string[] = [];
  refAndCDU: any[] = [];
  unitsCost = "(thousands of dollars)";
  unitsBarrels = "(millions of barrels per day - MBD)";
  
  saveCase(value: boolean){
    this.isSaved = true;
  }

  ngOnInit(): void {
    console.log(history.state)

    this.name = history.state.summaryData.title;
    this.refineries = history.state.summaryData.refineries;
    this.crudeType = history.state.summaryData.crude;
    this.minCost = `${parseInt(history.state.summaryData.min_cost) * 1000}`;
    this.numBarrels = history.state.summaryData.barrels

    for(let key in history.state.totals){
      this.minCostPerRef.push(history.state.totals[key][Object.keys(history.state.totals[key])[0]].Minimum_Cost);
      this.gasPerRef.push(history.state.totals[key][Object.keys(history.state.totals[key])[0]].Total_Gasoline);
      this.distillatePerRef.push(history.state.totals[key][Object.keys(history.state.totals[key])[0]].Total_Distillate);
      this.lightEndPerRef.push(history.state.totals[key][Object.keys(history.state.totals[key])[0]].Total_Light_End);

      let temp = history.state.totals[key][Object.keys(history.state.totals[key])[0]].Refinery;
      let temp2 = history.state.totals[key][Object.keys(history.state.totals[key])[0]].CDU_Utilization
      this.refAndCDU.push([temp, temp2]);

    }

    this.caseObj = {
      id: uuidv4(), 
      modelNum: 1, 
      name: this.name, 
      statusVar: "Active", 
      details: "N/A", 
      author: "John Smith", 
      date: new Date(), 
      caseInfo: history.state
    };
  }
}


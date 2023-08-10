import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamoService } from '../dynamo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-actions',
  templateUrl: './results-actions.component.html',
  styleUrls: ['./results-actions.component.css']
})
export class ResultsActionsComponent {
  constructor(private ddb: DynamoService, private router: Router){}

  @Input() caseObj: any;
  @Input() isSaved = false;

  @Output() save = new EventEmitter<boolean>();
  
  saveCase(){
    this.ddb.createCase(this.caseObj).subscribe((response)=>{
      console.log(response)
    })
    this.isSaved = true;
    this.save.emit(true)
  }

  home(){
    this.router.navigate(["/home"]);
  }
}

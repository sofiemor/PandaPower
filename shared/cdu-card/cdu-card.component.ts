import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cdu-card',
  templateUrl: './cdu-card.component.html',
  styleUrls: ['./cdu-card.component.css']
})
export class CduCardComponent {
  @Input() refineries: string[] = [];
  @Input() cduUtils: string[] = [];
  @Input() refAndCDU: string[][] = [];
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.css']
})

export class TitleCardComponent {
  @Input() name = '';
  @Input() refineries: string[] = [];
  @Input() crudeType = '';
}

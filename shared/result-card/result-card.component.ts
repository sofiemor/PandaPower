import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent {
  @Input() title = '';
  @Input() number = '';
  @Input() description = '';
  @Input() units = '';
}

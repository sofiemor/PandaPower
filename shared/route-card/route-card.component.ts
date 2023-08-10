import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-route-card',
  templateUrl: './route-card.component.html',
  styleUrls: ['./route-card.component.css']
})
export class RouteCardComponent {
  @Input() refineries: string[] = [];
}

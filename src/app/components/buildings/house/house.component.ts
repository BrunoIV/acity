import { Component, Input } from '@angular/core';

@Component({
  selector: 'building-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent {
  @Input() debug = '';

}

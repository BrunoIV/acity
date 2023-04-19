import { Component } from '@angular/core';

@Component({
  selector: 'ui-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.scss']
})
export class DateControlComponent {

  readonly SPEED_NORMAL = 200;
  readonly SPEED_FAST = 100;
  readonly SPEED_VERY_FAST = 50;

  public speed = this.SPEED_FAST;
  public paused: boolean = false;

  setSpeed(speed: number) {
    this.speed = speed;
  }


  togglePause() {
    this.paused = !this.paused;
  }
}

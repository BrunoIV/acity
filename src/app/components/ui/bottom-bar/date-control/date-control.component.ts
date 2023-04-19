import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ui-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.scss']
})
export class DateControlComponent {

  @ViewChild("progress") el: ElementRef;
  @ViewChild("span") span: ElementRef;

  readonly SPEED_NORMAL = 50;
  readonly SPEED_FAST = 25;
  readonly SPEED_VERY_FAST = 12.5;

  public speed = this.SPEED_NORMAL;
  public paused: boolean = false;

  private currentDate = new Date();
  private interval: any;
  private barWidth: number = 0;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (!this.paused) {
        this.el.nativeElement.style.width = this.barWidth + "px";

        if (this.barWidth == 0) {
          this.span.nativeElement.innerText = this.formatDate(this.currentDate);
          this.currentDate.setDate(this.currentDate.getDate() + 1);
        }

        this.barWidth += 2;

        if (this.barWidth > 120) {
          this.barWidth = 0;
        }

      }
    }, this.speed);
  }

  setSpeed(speed: number) {
    this.speed = speed;
    this.startTimer();
  }

  togglePause() {
    this.paused = !this.paused;
  }

  /**
   * Formate un date
   * @param date: Objeto Date con la fecha
   * @return String con la fecha formateda
   */
  formatDate(date: Date) {
    let formattedDate =
      this.lessTen(date.getDate()) +
      '-' +
      this.lessTen(date.getMonth() + 1) +
      '-' +
      date.getFullYear();
    return formattedDate;
  }

  /**
   * Recibe un número y es menor que 10 lo retorna concatenando un "0"
   * @param num: número
   * @return String de al menos dos decimales
   */
  lessTen(num: number) {
    if (num < 10) {
      return '0' + num;
    }
    return '' + num;
  }
}

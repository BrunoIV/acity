import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-zone-demand',
  templateUrl: './zone-demand.component.html',
  styleUrls: ['./zone-demand.component.css']
})
export class ZoneDemandComponent {
  constructor() {}
  @Input() value = 50;
  @Input() color = "#89e30f";
  ngOnInit() {}

  getBg() {
    return {
      background:
        "linear-gradient(to top, " +
        this.color +
        " " +
        this.value +
        "%, #49484e 0%)"
    };
  }
}

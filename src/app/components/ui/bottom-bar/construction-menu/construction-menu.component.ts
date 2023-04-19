import { Component } from '@angular/core';
import { BuildingsService } from 'src/app/services/buildings.service';

@Component({
  selector: 'ui-construction-menu',
  templateUrl: './construction-menu.component.html',
  styleUrls: ['./construction-menu.component.css']
})
export class ConstructionMenuComponent {
  selectedGroup = "";
  groups = [];
  buildings = [];

  ngOnInit() { }

  constructor(private buildingsService: BuildingsService) {
    this.groups = buildingsService.getGroups();
    this.buildings = buildingsService.getAvailableBuildingsList();
  }

  setSelectedConstruction(building) {
    //this.buildingsService.setSelectedBuilding(building.getKeyword());
  }
}

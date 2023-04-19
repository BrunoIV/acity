import { Injectable } from '@angular/core';
import { Building } from '../models/building';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {
  private buildings: Building[];

  constructor() {
    this.buildings = [];
    this.buildings.push(new House());
  }

  getGroups() {
    return [
      { id: 'civil', label: 'Civil', icon: 'fas fa-home' },
      { id: 'water', label: 'Agua', icon: 'fas fa-tint' },
      { id: 'electricity', label: 'Electricidad', icon: 'fas fa-bolt' },
      { id: 'government', label: 'Gobierno', icon: 'fas fa-landmark' },
      { id: 'services', label: 'Servicios', icon: 'far fa-hospital' },
      { id: 'roads', label: 'Carreteras', icon: 'fas fa-road' },
      { id: 'industry', label: 'Industria', icon: 'fas fa-industry' }
    ];
  }

  getAvailableBuildingsList() {
    return this.buildings;
  }
}

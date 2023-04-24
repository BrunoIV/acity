import { Injectable } from '@angular/core';
import { Building } from '../models/building';
import { House } from '../models/house';
import { PoliceStation } from '../models/police-station';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {
  private buildings: Building[];
  private keywordSelectedBuilding = 'house'; //Dejo seleccionado casa para debug
  private boardConstructions = [];
  private currentId = 0;

  constructor() {
    this.buildings = [];
    this.buildings.push(new House());
    this.buildings.push(new PoliceStation());
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

  getSelectedBuilding() {
    return this.keywordSelectedBuilding;
  }

  setSelectedBuilding(building: string) {
    return (this.keywordSelectedBuilding = building);
  }

  /**
   * Retorna una nueva instancia de un edificio a partir de su keyword
   * Es importante no reusar las de this.buildings para no modificar un edificio existentes
   */
  getBuildingByKeyword(keyword: string) {
    switch (keyword) {
      case 'house':
        return new House();
        break;
      case 'police-station':
        return new PoliceStation();
        break;
      default:
        return null;
        break;
    }
  }

  getNextId() :number {
    return this.currentId++;
  }

  /**
   * Agrega una construcción al tablero
   */
  addBuilding(building: Building) {
    this.boardConstructions.push(building);
  }

  /**
   * Retorna los edificios construidos
   */
  getBuildings(): Building[] {
    return this.boardConstructions;
  }
}

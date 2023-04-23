import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';

import { BuildingsService } from 'src/app/services/buildings.service';
import { AppSettings } from 'src/app/app-settings';
import { Building } from 'src/app/models/building';

@Component({
  selector: 'layers-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  @ViewChild('displayedboard', { static: false }) board: ElementRef;
  private x:number;
  private y:number;

  constructor(
    public buildingsService: BuildingsService
  ) { }

  addElement(event :any) {
    
    if (this.buildingsService.getSelectedBuilding() != '') {
      let building = this.buildingsService.getBuildingByKeyword(
        this.buildingsService.getSelectedBuilding()
      );

      //Obtengo en que casillas del tablero se encuentra el ratón
      let x = this.getCoordinateX(event);
      let y = this.getCoordinateY(event);
      building.setX(x);
      building.setY(y);

      this.buildingsService.addBuilding(building);
    }
  }

  /**
  * Obtiene
  */
  getCoordinateX(event :any) {
    //Coordenada X del ratón
    let coordinateMouseX = event.x;

    //Distancia entre el borde izquierdo y el inicio del tablero
    let coordinateBoardX = this.board.nativeElement.getBoundingClientRect()
      .left;

    return Math.trunc(
      (coordinateMouseX - coordinateBoardX) / AppSettings.CELL_SIZE_PX
    );
  }

  /**
   * Obtiene el número de casilla en el que se encuentra el ratón en el eje Y (de arriba a abajo)
   * siendo 0 la primera casilla
   */
  getCoordinateY(event :any) {
    //Coordenada Y del ratón dentro del documento HTML
    let coordinateMouseY = event.y;

    //Obtengo la coordenada Y donde empieza el tablero (distancia entre el tablero y el borde superior del documento HTML)
    let coordinateBoardY = this.board.nativeElement.getBoundingClientRect().top;

    //Restando (coordinateMouseY - coordinateBoardY) puedo saber la posición del cursor DENTRO al tablero.
    //Si coloco el mouse en la parte superior del tablero sería 0, con independencia de donde se encuentre el tablero en pantalla
    //Para saber en que casilla me encuentro lo divido entre el tamaño de la casilla
    return Math.trunc(
      (coordinateMouseY - coordinateBoardY) / AppSettings.CELL_SIZE_PX
    );
  }



  /**
   * Genera los estilos necesarios para posicionar el edificio
   */
  getStylesBuilding(build: Building) {
    return {
      top: build.getY() * AppSettings.CELL_SIZE_PX + 'px',
      left:
        build.getX() * AppSettings.CELL_SIZE_PX +
        'px'
    };
  }

  getStylesShadow() {
    if (this.buildingsService.getSelectedBuilding() != '') {

      let building: Building = this.buildingsService.getBuildingByKeyword(
        this.buildingsService.getSelectedBuilding()
      );

      return {
        top: this.y * AppSettings.CELL_SIZE_PX + 'px',
        left: this.x * AppSettings.CELL_SIZE_PX + 'px',
        width: building.getWidth() * AppSettings.CELL_SIZE_PX + 'px',
        height: building.getHeight() * AppSettings.CELL_SIZE_PX + 'px',
        background: 'green'
      };
    }

    return {};
  }

  showShadowBuilding(event :any) {
    if (this.buildingsService.getSelectedBuilding() != '') {
      //Obtengo en que casillas del tablero se encuentra el ratón
      let x = this.getCoordinateX(event);
      let y = this.getCoordinateY(event);

      this.x = x;
      this.y= y;

      let building: Building = this.buildingsService.getBuildingByKeyword(
        this.buildingsService.getSelectedBuilding()
      );
      building.setX(x);
      building.setY(y);

      /*
      if (this.coordinatesChanged(x, y)) {
        //Le paso la información al padre para el debug
        Log.fixme('Restaurar displayCoordinateX');
        //this.displayCoordinateX.emit(x);
        // this.displayCoordinateY.emit(y);
        this.drawTemporalElement(x, y, this.generateShadow(x, y, building));

        this.prevX = x;
        this.prevY = y;
      }*/
    }
  }
}

import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';

import { BuildingsService } from 'src/app/services/buildings.service';

@Component({
  selector: 'layers-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  @ViewChild('displayedboard', { static: false }) board: ElementRef;

  constructor(
    public buildingsService: BuildingsService
  ) { }

  addElement(event) {
    
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
  getCoordinateX(event) {
    //Coordenada X del ratón
    let coordinateMouseX = event.x;

    //Distancia entre el borde izquierdo y el inicio del tablero
    let coordinateBoardX = this.board.nativeElement.getBoundingClientRect()
      .left;

    return Math.trunc(
      (coordinateMouseX - coordinateBoardX) / 50
    );
  }

  /**
   * Obtiene el número de casilla en el que se encuentra el ratón en el eje Y (de arriba a abajo)
   * siendo 0 la primera casilla
   */
  getCoordinateY(event) {
    //Coordenada Y del ratón dentro del documento HTML
    let coordinateMouseY = event.y;

    //Obtengo la coordenada Y donde empieza el tablero (distancia entre el tablero y el borde superior del documento HTML)
    let coordinateBoardY = this.board.nativeElement.getBoundingClientRect().top;

    //Restando (coordinateMouseY - coordinateBoardY) puedo saber la posición del cursor DENTRO al tablero.
    //Si coloco el mouse en la parte superior del tablero sería 0, con independencia de donde se encuentre el tablero en pantalla
    //Para saber en que casilla me encuentro lo divido entre el tamaño de la casilla
    return Math.trunc(
      (coordinateMouseY - coordinateBoardY) / 50
    );
  }



  /**
   * Genera los estilos necesarios para posicionar el edificio
   */
  getStylesBuilding(build) {
    return {
      top: build.y * 50 + 'px',
      left:
        build.x * 50 +
        'px'
    };
  }
}

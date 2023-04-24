import { Building } from './building';
export class PoliceStation extends Building {

	private readonly ICON = 'fas fa-blind';
	private readonly KEYWORD = 'police-station';
	private readonly NAME = 'Estación de policía';
	private readonly WIDTH = 3;
	private readonly HEIGHT = 3;


	constructor() {
		super();
		super.setGroup(Building.GROUP_SERVICES);
		super.setIcon(this.ICON);
		super.setName(this.NAME);
		super.setKeyword(this.KEYWORD);
		super.setWidth(this.WIDTH);
		super.setHeight(this.HEIGHT);
	}
}

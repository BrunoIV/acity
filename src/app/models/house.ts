import { Building } from './building';
export class House extends Building {

	private readonly ICON = 'fas fa-home';
	private readonly KEYWORD = 'house';
	private readonly NAME = 'Casa';

	constructor() {
		super();
		super.setGroup(Building.GROUP_CIVIL);
		super.setIcon(this.ICON);
		super.setName(this.NAME);
		super.setKeyword(this.KEYWORD);
	}
}

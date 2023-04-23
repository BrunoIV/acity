export class Building {

	//Tipos de edificios
	public static GROUP_CIVIL = 'civil';

	private group: string;
	private icon: string;
	private keyword: string;
	private name: string;
	private x: number;
	private y: number;
	private width: number;
	private height: number;

	setGroup(group: string) {
		this.group = group;
	}

	getGroup(): string {
		return this.group;
	}


	setIcon(icon: string) {
		this.icon = icon;
	}

	getIcon(): string {
		return this.icon;
	}

	setKeyword(keyword: string) {
		this.keyword = keyword;
	}

	getKeyword() {
		return this.keyword;
	}

	setName(name: string) {
		this.name = name;
	}

	getName(): string {
		return this.name;
	}

	setX(x: number) {
		this.x = x;
	}

	getX() :number {
		return this.x;
	}

	setY(y: number) {
		this.y = y;
	}

	getY() :number {
		return this.y;
	}

	setWidth(width: number) {
		this.width = width;
	}

	getWidth() :number {
		return this.width;
	}

	setHeight(height: number) {
		this.height = height;
	}

	getHeight() :number {
		return this.height;
	}
}

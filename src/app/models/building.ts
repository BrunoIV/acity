export class Building {

	//Tipos de edificios
	public static GROUP_CIVIL = 'civil';

	private group: string;
	private icon: string;
	private keyword: string;
	private name: string;

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
}

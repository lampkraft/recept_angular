import { Ingredient } from "./ingredient";

export class Recipe {

	title: string;
	description: string;

	constructor (data: any) {
		this.title = data.title;
		this.description = data.description;
	}
}
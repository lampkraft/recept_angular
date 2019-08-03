import { Component, Input } from '@angular/core';

@Component({
	selector: 'recept-recipe-flags',
	templateUrl: './recipe-flags.component.html',
	styleUrls: ['./recipe-flags.component.scss']
})
export class RecipeFlagsComponent {

	@Input() flags: string[];

	constructor () {}
}
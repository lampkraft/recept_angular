import { Component, Input } from '@angular/core';

@Component({
	selector: 'recept-recipe-flags',
	templateUrl: './recipe-flags.component.html',
	styleUrls: ['./recipe-flags.component.less']
})
export class RecipeFlagsComponent {

	@Input() flags: string[];

	constructor () {}
}
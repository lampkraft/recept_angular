import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToggleSideMenu } from '../../features/recipes/state/recipes.actions';

@Component({
	selector: 'recept-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

	constructor (private store: Store<any>) {}

	toggleSideMenu () {
		this.store.dispatch(new ToggleSideMenu());
	}
}
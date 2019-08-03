import { Component, Input } from '@angular/core';

@Component({
	selector: 'recept-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
	@Input() size: number;
	constructor () {}
}
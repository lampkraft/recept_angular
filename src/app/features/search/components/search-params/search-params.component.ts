import { Component, Output, EventEmitter } from '@angular/core';
import { IChipData } from '../add-chip-list/add-chip-list.component';

export interface IFilterParameters {
	tags: string[];
	fromDate: Date;
	ingredients: any[];
	maxNutritionValue: number;
}

@Component({
	selector: 'recept-search-params',
	templateUrl: './search-params.component.html',
	styleUrls: ['./search-params.component.scss']
})
export class SearchParamsComponent {
	@Output() applyFilter: EventEmitter<IFilterParameters> = new EventEmitter();
	filterParameters: IFilterParameters = {
		tags: [],
		fromDate: new Date(),
		ingredients: [
			{
				name: 'Frukt',
				id: '0'
			}
		],
		maxNutritionValue: 500
	};

	constructor () {}

	onApplyFilter () {
		this.applyFilter.emit(this.filterParameters);
	}

	reset () {
		this.filterParameters = null;
	}

	ingredientsChange (ingredients: IChipData[]) {
		console.log('ingredients', ingredients);
	}

	tagsChange (tags: IChipData[]) {
		console.log('tags', tags);
	}
}

import { Component, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFilterParameters } from './components/search-params/search-params.component';

@Component({
	selector: 'recept-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent {
	searchString: string = '';
	// @Output() matchingRecipes: number;
	filterOptionsActive: boolean;
	
	constructor(private store: Store<any>) { }
  
	ngOnInit() {
	}
  
	onSearch (searchString: string) {
	  this.searchString = searchString;
	  // this.store.dispatch(new SearchRecipe(this.searchString.toLowerCase()));
	}

	onApplyFilter (filterParameters: IFilterParameters) {

	}

	toggleFilterOptions () {
		this.filterOptionsActive = !this.filterOptionsActive;
	}
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRecipeImage } from 'src/app/models/recipe';
import { Loading } from '../../../model/loading.interface';

@Component({
	selector: 'recept-view-recipe-page',
	templateUrl: './view-recipe.component.html',
	styleUrls: ['./view-recipe.component.less']
})
export class ViewRecipePageComponent implements OnInit {
	@Input() title: string;
	@Input() name: string;
	@Input() description: string;
	@Input() images: IRecipeImage[];
	@Input() loading: Loading;
	@Input() ingredientItems: any[];
	@Output() back: EventEmitter<void> = new EventEmitter();
	@Output() edit: EventEmitter<void> = new EventEmitter();
	headingImage: IRecipeImage;

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges (changes) {
		if (changes && changes.images && changes.images.currentValue) {
			this.headingImage = changes.images.currentValue.length > 0 && changes.images.currentValue[0].base64Image;
		}
	}

	navigateBack () {
		this.back.emit();
	}

	navigateToEditRecipe () {
		this.edit.emit();
	}

}

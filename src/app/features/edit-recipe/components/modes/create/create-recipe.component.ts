import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRecipe, IRecipeImage, IIngredient } from 'src/app/models/recipe';
import { ImageUploadService } from '../../../services/image-upload.service';
import { Router } from '@angular/router';
import { Loading } from '../../../model/loading.interface';

@Component({
	selector: 'recept-create-recipe-page',
	templateUrl: './create-recipe.component.html',
	styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipePageComponent implements OnInit {
	@Input() id: string;
	@Input() title: string;
	@Input() description: string;
	@Input() name: string;
	@Input() images: string[];
	@Input() editMode: boolean = false;
	@Input() loading: Loading;
	@Input() ingredientItems: IIngredient[];
	@Output() createRecipe: EventEmitter<IRecipe> = new EventEmitter();
	@Output() updateRecipe: EventEmitter<IRecipe> = new EventEmitter();
	@Output() createRecipeImages: EventEmitter<IRecipeImage[]> = new EventEmitter();
	@Output() deleteRecipeImages: EventEmitter<IRecipeImage[]> = new EventEmitter();
	@Output() addItem: EventEmitter<IRecipeImage[]> = new EventEmitter();
	@Output() back: EventEmitter<void> = new EventEmitter();
	@Output() removeIngredient: EventEmitter<void> = new EventEmitter();
	modifiedImages: IRecipeImage[] = [];
	removedImages: IRecipeImage[] = [];
	thumbnailImage: string;
	imageUploaderFileElementId: string = 'file';

	constructor(private imageUploadService: ImageUploadService) { }

	ngOnInit() {
		console.log('editMode', this.editMode);
	}

	ngOnChanges(changes) {
		if (changes && changes.images) {
			this.modifiedImages = changes.images.currentValue ? changes.images.currentValue : [];
			this.thumbnailImage = this.modifiedImages.length > 0 ? this.modifiedImages[0].base64Image : null;
			console.log('this.modifiedImages', this.modifiedImages);
		}
	}

	onCreateRecipe () {
		this.createRecipe.emit({
			id: this.id,
			name: this.name,
			description: this.description,
			base64Thumbnail: this.thumbnailImage,
			images: this.modifiedImages, // Save all images
			ingredients: this.ingredientItems
		});
	}

	onUpdateRecipe () {
		const imagesToBeSaved = this.modifiedImages.filter(image => image.id && image.id.includes('unsaved_'));
		// Recipe handling
		this.updateRecipe.emit({
			id: this.id,
			name: this.name,
			description: this.description,
			base64Thumbnail: this.thumbnailImage,
			images: imagesToBeSaved, // Only get unsaved ones
			ingredients: this.ingredientItems
		});
		// Image handling
		if (this.removedImages.length > 0) {
			this.deleteRecipeImages.emit(this.removedImages);
		}
	}

	onDeleteImage(image: IRecipeImage) {
		if (!image.id.includes('unsaved_')) { // If not saved then don't handle it as a 'removed image'
			this.removedImages = [...this.removedImages, image];
		}
		console.log('deleteImage:this.removedImages', this.removedImages, ' image: ', image);
		this.modifiedImages = this.modifiedImages.filter(mImage => mImage.id !== image.id);
	}

	onUploadImage(files: FileList) {
		if (files.length > 0) {
			this.readImageFiles(files);
		}
	}

	onSave (editMode: boolean) {
		if (editMode) {
			this.onUpdateRecipe();
		} else {
			this.onCreateRecipe();
		}
	}

	openFileUploader () {
		document.getElementById(this.imageUploaderFileElementId).click();
	}

	addIngredientItem () {
		this.addItem.emit();
	}

	onRemoveIngredient (ingredient: any) {
		this.removeIngredient.emit(ingredient);
	}

	updateName(value: string) {
		this.name = value;
	}

	updateDescription(value: string) {
		this.description = value;
	}

	navigateBack () {
		this.back.emit();
	}

	async readImageFiles(files: FileList) {
		try {
			const fileData = await this.imageUploadService.getImageFileData(files[0]);
			this.modifiedImages = [...this.modifiedImages, {
				id: 'unsaved_' + Date.now(), // unsaved_ means its new
				base64Image: fileData as string,
				recipeId: this.id
			}];
		} catch (e) {
			console.error(e.message)
		}
	}
}

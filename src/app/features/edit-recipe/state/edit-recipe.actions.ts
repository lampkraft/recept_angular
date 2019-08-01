import { IRecipe, IRecipeImage } from '../../../models/recipe';
import { AddIngredientItemSheetComponent } from '../components/ingredients/add-ingredient-item-sheet/add-ingredient-item-sheet.component';

export enum EditRecipeActionTypes {
	updateRecipe = '[Edit Recipe] Edit a recipe',
	updateRecipeSuccess = '[Edit Recipe Success] Successfully edited a recipe',
	updateRecipeFailed = '[Edit Recipe Failed] Failed to edit a recipe',
	createRecipe = '[Create Recipe] Create a new recipe',
	createRecipeSuccess = '[Create Recipe Success] Successfully created a new recipe',
	createRecipeFailed = '[Create Recipe Failed] Failed to create a new recipe',
	createRecipeImages = '[Create Images] Creating images',
	createRecipeImagesSuccess = '[Create Images] Successfully created images',
	createRecipeImagesFailed = '[Create Images] Failed to create images',
	loadRecipe = '[Load A Single Recipe] Load a single recipe',
	loadRecipeSuccess = '[Load A Single Recipe Success] Successfully loaded a single recipe',
	loadRecipeFailed = '[Load A Single Recipe Failed] Failed to load a single recipe',
	loadRecipeImages = '[Load Images] Load images from recipe',
	loadRecipeImagesSuccess = '[Load Images Success] Successfully loaded images from recipe',
	loadRecipeImagesFailed = '[Load Images Failed] Failed to load images from recipe',
	deleteRecipeImages = '[Delete Recipe images] Delete images from a recipe',
	deleteRecipeImagesSuccess = '[Delete Recipe images] Successfully deleted images from a recipe',
	deleteRecipeImagesFailed = '[Delete Recipe images] Failed to delete images from a recipe',
	clearCurrentRecipe = '[Clear Current Recipe] Clear currently selected recipe',
	searchIngredient = '[Search Ingredient] Search for ingredient',
	searchIngredientSuccess = '[Search Ingredient success] Successfully made a search for an ingredient',
	searchIngredientFailed = '[Search Ingredient Failed] Failed to do a search for an ingredient',
	addIngredientItem = '[Add Ingredient Item] Add a new ingredient to list of ingredients',
	removeIngredientItem = '[Remove Ingredient Item] Remove an ingredient item from list of ingredients'
}

export class UpdateRecipe {
	type = EditRecipeActionTypes.updateRecipe;
	constructor (public payload: IRecipe) {}
}

export class UpdateRecipeSuccess {
	type = EditRecipeActionTypes.updateRecipeSuccess;
	constructor (public payload: any) {}
}

export class UpdateRecipeFailed {
	type = EditRecipeActionTypes.updateRecipeFailed;
	constructor (public payload: any) {}
}

export class CreateRecipe {
	type = EditRecipeActionTypes.createRecipe;
	constructor (public payload: IRecipe) {}
}

export class CreateRecipeSuccess {
	type = EditRecipeActionTypes.createRecipeSuccess;
	constructor (public payload: {recipeId: string, images: string[]}) {}
}

export class CreateRecipeFailed {
	type = EditRecipeActionTypes.createRecipeFailed;
	constructor (public payload: any) {}
}

export class CreateRecipeImages {
	type = EditRecipeActionTypes.createRecipeImages;
	constructor (public payload: {recipeId: string, images: string[]}) {}
}

export class CreateRecipeImagesSuccess {
	type = EditRecipeActionTypes.createRecipeImagesSuccess;
	constructor (public payload: any) {}
}

export class CreateRecipeImagesFailed {
	type = EditRecipeActionTypes.createRecipeImagesFailed;
	constructor (public payload: any) {}
}

export class LoadRecipe {
	type = EditRecipeActionTypes.loadRecipe;
	constructor (public payload: string) {}
}

export class LoadRecipeSuccess {
	type = EditRecipeActionTypes.loadRecipeSuccess;
	constructor (public payload: any) {}
}

export class LoadRecipeFailed {
	type = EditRecipeActionTypes.loadRecipeFailed;
	constructor (public payload: any) {}
}

export class LoadRecipeImages {
	type = EditRecipeActionTypes.loadRecipeImages;
	constructor (public payload: string) {} // recipe id
}

export class LoadRecipeImagesSuccess {
	type = EditRecipeActionTypes.loadRecipeImagesSuccess;
	constructor (public payload: IRecipeImage[]) {}
}

export class LoadRecipeImagesFailed {
	type = EditRecipeActionTypes.loadRecipeImagesFailed;
	constructor (public payload: any) {}
}

export class DeleteRecipeImages {
	type = EditRecipeActionTypes.deleteRecipeImages;
	constructor (public payload: IRecipeImage[]) {}
}

export class DeleteRecipeImagesSuccess {
	type = EditRecipeActionTypes.deleteRecipeImagesSuccess;
	constructor (public payload: any) {}
}

export class DeleteRecipeImagesFailed {
	type = EditRecipeActionTypes.deleteRecipeImagesFailed;
	constructor (public payload: any) {}
}

export class ClearCurrentRecipe {
	type = EditRecipeActionTypes.clearCurrentRecipe;
	constructor (public payload: any) {}
}

export class SearchIngredient {
	type = EditRecipeActionTypes.searchIngredient;
	constructor (public payload: string) {}
}

export class SearchIngredientSuccess {
	type = EditRecipeActionTypes.searchIngredientSuccess;
	constructor (public payload: any) {}
}

export class SearchIngredientFailed {
	type = EditRecipeActionTypes.searchIngredientFailed;
	constructor (public payload: any) {}
}

export class AddIngredientItem {
	type = EditRecipeActionTypes.addIngredientItem;
	constructor (public payload: any) {}
}

export class RemoveIngredientItem {
	type = EditRecipeActionTypes.removeIngredientItem;
	constructor (public payload: any) {}
}

export type EditRecipeActions = UpdateRecipe
| UpdateRecipeSuccess
| UpdateRecipeFailed
| CreateRecipe
| CreateRecipeSuccess
| CreateRecipeFailed
| CreateRecipeImages
| LoadRecipe
| LoadRecipeSuccess
| LoadRecipeFailed
| LoadRecipeImages
| LoadRecipeImagesSuccess
| LoadRecipeImagesFailed
| DeleteRecipeImages
| DeleteRecipeImagesSuccess
| DeleteRecipeImagesFailed
| ClearCurrentRecipe
| SearchIngredient
| SearchIngredientSuccess
| SearchIngredientFailed
| AddIngredientItem
| RemoveIngredientItem;


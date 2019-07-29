import { Injectable } from '@angular/core';
import { RecipeService } from '../../../services/recipes.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, map, concatMap, filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditRecipeActionTypes, EditRecipeActions, CreateRecipeSuccess, CreateRecipeFailed, CreateRecipe, LoadRecipeSuccess, LoadRecipeFailed, LoadRecipeImages, LoadRecipeImagesSuccess, LoadRecipeImagesFailed, UpdateRecipeSuccess, UpdateRecipeFailed, DeleteRecipeImages, DeleteRecipeImagesSuccess, DeleteRecipeImagesFailed, CreateRecipeImages, CreateRecipeImagesSuccess, CreateRecipeImagesFailed } from './edit-recipe.actions';
import { IRecipeImage } from 'src/app/models/recipe';

@Injectable()
export class EditRecipeEffects {

	constructor(private actions$: Actions, private recipeService: RecipeService, private snackBar: MatSnackBar) { }

	@Effect()
	updateRecipe$: Observable<any> = this.actions$.pipe(
		ofType(EditRecipeActionTypes.updateRecipe),
		mergeMap((action: EditRecipeActions) => this.recipeService.updateRecipe(action.payload.id, action.payload)
			.pipe(
				map((response) => new CreateRecipeSuccess({ recipeId: response.id, images: action.payload.images.map(image => image.base64Image) })),
				catchError(err => of(new CreateRecipeFailed(err)))
			))
	)

	@Effect()
	updateRecipeSuccess$: Observable<any> = this.actions$.pipe(
		ofType(EditRecipeActionTypes.updateRecipeSuccess),
		map((action: CreateRecipeSuccess) => action.payload),
		filter(payload => payload.images.length > 0), // If payload contains any images
		concatMap(payload => [
			new CreateRecipeImages(payload)
		])
	)

	@Effect()
	loadRecipe$: Observable<any> = this.actions$.pipe(
		ofType(EditRecipeActionTypes.loadRecipe),
		mergeMap((action: EditRecipeActions) => this.recipeService.loadRecipe(action.payload)
			.pipe(
				map(response => new LoadRecipeSuccess(response)),
				catchError(err => of(new LoadRecipeFailed(err)))
			))
	)

	@Effect()
	createRecipe$: Observable<any> = this.actions$.pipe(
		ofType(EditRecipeActionTypes.createRecipe),
		mergeMap((action: CreateRecipe) => this.recipeService.createRecipe(action.payload)
			.pipe(
				map((response) => new CreateRecipeSuccess({ recipeId: response.id, images: action.payload.images.map(image => image.base64Image) })),
				catchError(err => of(new CreateRecipeFailed(err)))
			))
	)

	@Effect()
	createRecipeSuccess$: Observable<any> = this.actions$.pipe(
		ofType(EditRecipeActionTypes.createRecipeSuccess),
		map((action: CreateRecipeSuccess) => action.payload),
		filter(payload => payload.images.length > 0), // If payload contains any images
		concatMap(payload => [
			new CreateRecipeImages(payload)
		])
	)

	@Effect()
	createRecipeImages$: Observable<any> = this.actions$.pipe(
		ofType(EditRecipeActionTypes.createRecipeImages),
		mergeMap((action: CreateRecipeImages) => this.recipeService.createRecipeImages(action.payload.recipeId, action.payload.images)
			.pipe(
				map(response => new CreateRecipeImagesSuccess(response)),
				catchError(err => of(new CreateRecipeImagesFailed(err)))
			))
	)

	@Effect()
	loadRecipeImages$: Observable<any> = this.actions$.pipe(
		ofType(EditRecipeActionTypes.loadRecipeImages),
		mergeMap((action: LoadRecipeImages) => this.recipeService.loadRecipeImages(action.payload)
			.pipe(
				map(response => new LoadRecipeImagesSuccess(response as IRecipeImage[])),
				catchError(err => of(new LoadRecipeImagesFailed(err)))
			))
	)

	@Effect()
	deleteRecipeImages$: Observable<any> = this.actions$.pipe(
		ofType(EditRecipeActionTypes.deleteRecipeImages),
		mergeMap((action: DeleteRecipeImages) => this.recipeService.deleteRecipeImages(action.payload[0].recipeId, action.payload.reduce((acc, image) => acc + image.id + ',', '')) // reduce images list to joined string for request
			.pipe(
				map(response => new DeleteRecipeImagesSuccess(response)),
				catchError(err => of(new DeleteRecipeImagesFailed(err)))
			))
	)

}
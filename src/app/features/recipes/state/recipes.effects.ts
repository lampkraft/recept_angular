import { Injectable } from '@angular/core';
import { RecipeService } from '../../../services/recipes.service';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { RecipesActionTypes, RecipesActions, LoadRecipesSuccess, LoadRecipesFailed, DeleteRecipeSuccess, DeleteRecipeFailed, LoadRecipes } from './recipes.actions';
import { Observable, pipe, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { mapTo, mergeMap, catchError, map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class RecipesEffects {

	constructor(private actions$: Actions, private recipeService: RecipeService, private snackBar: MatSnackBar) {}

	@Effect()
	loadRecipes$: Observable<any> = this.actions$.pipe(
		ofType(RecipesActionTypes.loadRecipes),
		mergeMap((action: RecipesActions) => this.recipeService.loadAllRecipes()
		.pipe(
		  map(response => new LoadRecipesSuccess(response)),
		  catchError(err => of(new LoadRecipesFailed(err)))
		))
	)

	@Effect()
	deleteRecipe$: Observable<any> = this.actions$.pipe(
		ofType(RecipesActionTypes.deleteRecipe),
		mergeMap((action: RecipesActions) => this.recipeService.deleteRecipe(action.payload)
		.pipe(
		  map(response => new DeleteRecipeSuccess(response)),
		  catchError(err => of(new DeleteRecipeFailed(err))),
		  map(() => new LoadRecipes(''))
		))
	)
}
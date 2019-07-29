import { IRecipe } from 'src/app/models/recipe';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { AppState } from 'src/app/state/app.selectors';
import { Loading } from '../model/loading.interface';

export interface FeatureState {
	recipePosts: Record<string, IRecipe>,
	recipePostsById: string[],
	currentRecipe: IRecipe,
	createRecipeLoading: boolean,
	createRecipeErrorMessage: string,
	updateRecipeLoading: boolean,
	updateRecipeErrorMessage: string,
	loadRecipeLoading: boolean,
	loadRecipeErrorMessage: string,
	loadRecipeImagesLoading: boolean,
	loadRecipeImagesErrorMessage: string
}

export const selectFeature = createFeatureSelector<FeatureState>('edit-recipe');

export const selectCurrentRecipe = createSelector(
	selectFeature,
	(state: FeatureState) => {
		return state.currentRecipe;
	}
);

export const selectLoading = createSelector(
	selectFeature,
	(state: FeatureState): Loading => {
		return {
			createRecipeLoading: state.createRecipeLoading,
			updateRecipeLoading: state.updateRecipeLoading,
			loadRecipeLoading: state.loadRecipeLoading,
			loadRecipeImagesLoading: state.loadRecipeImagesLoading
		}
	}
);

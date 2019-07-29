import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IRecipe } from 'src/app/models/recipe';
import { Loading } from '../model/loading.interface';
 
export interface FeatureState {
  recipePosts: Record<string, IRecipe>;
  recipePostsById: string[],
  expandedRecipe: string,
  noOfRecipes: number,
  view: string,
  showSideMenu: boolean,
  loadRecipesLoading: boolean,
  deleteRecipeLoading: boolean
}

export const selectFeature = createFeatureSelector<FeatureState>('recipes');
 
export const selectRecipePosts = createSelector(
  selectFeature,
  (state: FeatureState) => {
    // Get recipes by order
    return state.recipePostsById && state.recipePostsById.map((recipe) => {
      return state.recipePosts[recipe];
    });
  }
);

export const selectExpandedRecipe = createSelector(
  selectFeature,
  (state: FeatureState) => {
    return state.expandedRecipe;
  }
);

export const selectNoOfRecipes = createSelector(
  selectFeature,
  (state: FeatureState) => {
    return state.noOfRecipes;
  }
);

export const selectRecipesView = createSelector(
  selectFeature,
  (state: FeatureState) => {
    return state.view;
  }
);

export const selectShowSideMenu = createSelector(
  selectFeature,
  (state: FeatureState) => {
    return state.showSideMenu;
  }
);

export const selectLoading = createSelector(
	selectFeature,
	(state: FeatureState): Loading => {
		return {
      recipesLoading: state.loadRecipesLoading,
      deleteRecipeLoading: state.deleteRecipeLoading
		}
	}
);
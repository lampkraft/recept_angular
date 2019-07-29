import { createSelector, createFeatureSelector, State } from '@ngrx/store';
import * as recipesFeatureState from '../features/recipes/state/recipes.selectors';
import * as editRecipeFeatureState from '../features/edit-recipe/state/edit-recipe.selectors';

export interface AppState {
  'edit-recipe': recipesFeatureState.FeatureState,
  'recipes': editRecipeFeatureState.FeatureState,
}

// export const selectFeature = createSelector(
//   State,
//   (state: AppState) => {
//     return state.expandedRecipe;
//   }
// );

// export const selectExpandedRecipe = createSelector(
//   selectFeature,
//   (state: FeatureState) => {
//     return state.expandedRecipe;
//   }
// );
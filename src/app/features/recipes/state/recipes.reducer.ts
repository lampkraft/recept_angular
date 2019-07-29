import { RecipesActionTypes, RecipesActions } from './recipes.actions';
import { FeatureState } from './recipes.selectors';

const initialState: FeatureState = {
	recipePosts: null,
	noOfRecipes: 0,
	recipePostsById: null,
	expandedRecipe: '',
	view: 'list',
	showSideMenu: false,
	loadRecipesLoading: false,
	deleteRecipeLoading: false
};

export function recipesReducer (state = initialState, action: RecipesActions): FeatureState {
	switch (action.type) {
	case RecipesActionTypes.addRecipe:
		return {
			...state,
			recipePosts: {
				...state.recipePosts,
				[action.payload.name]: action.payload
			},
			recipePostsById: [
				...state.recipePostsById,
				action.payload.name
			].sort()
		};
	case RecipesActionTypes.searchRecipe:
		const filteredRecipes = Object.keys(state.recipePosts).filter(id => {
			return state.recipePosts[id].name.toLowerCase().includes(action.payload);
		});
		return {
			...state,
			recipePostsById: [
				...filteredRecipes
			],
			noOfRecipes: filteredRecipes.length
		}
	case RecipesActionTypes.expandRecipe:
		return {
			...state,
			expandedRecipe: action.payload
		}
	case RecipesActionTypes.toggleRecipesView:
		return {
			...state,
			view: action.payload
		}
	case RecipesActionTypes.toggleSideMenu:
		return {
			...state,
			showSideMenu: action.payload != null ? action.payload : !state.showSideMenu
		}
	case RecipesActionTypes.loadRecipes:
		return {
			...state,
			loadRecipesLoading: true
		}
	case RecipesActionTypes.loadRecipesSuccess:
		const recipes = action.payload.reduce((recipesMap, recipe) => {
			recipesMap[recipe.id] = recipe
			return recipesMap;
		}, {});
		return {
			...state,
			loadRecipesLoading: false,
			recipePosts: recipes,
			recipePostsById: Object.keys(recipes).sort()
		};
	case RecipesActionTypes.loadRecipesFailed:
		return {
			...state,
			loadRecipesLoading: false
		}
	case RecipesActionTypes.deleteRecipe:
		return {
			...state,
			deleteRecipeLoading: true
		}
	case RecipesActionTypes.deleteRecipeSuccess:
		return {
			...state,
			deleteRecipeLoading: false
		}
	case RecipesActionTypes.deleteRecipeFailed:
		return {
			...state,
			deleteRecipeLoading: false
		}
	default:
		return state;
	}
}
import { EditRecipeActionTypes, EditRecipeActions } from './edit-recipe.actions';
import { IRecipe } from 'src/app/models/recipe';
import { FeatureState } from './edit-recipe.selectors';

const clearedRecipe: IRecipe = {
	id: null,
	name: null,
	description: null,
	images: null,
	base64Thumbnail: null,
	ingredients: []
}
const initialState: FeatureState = {
	recipePosts: {},
	recipePostsById: [],
	currentRecipe: {...clearedRecipe},
	createRecipeLoading: false,
	createRecipeErrorMessage: '',
	updateRecipeLoading: false,
	updateRecipeErrorMessage: '',
	loadRecipeLoading: false,
	loadRecipeErrorMessage: '',
	loadRecipeImagesLoading: false,
	loadRecipeImagesErrorMessage: '',
	ingredientSearchResult: null
};

export function editRecipeReducer (state = initialState, action: EditRecipeActions): FeatureState {
	switch (action.type) {
	case EditRecipeActionTypes.createRecipe:
		return {
			...state,
			createRecipeLoading: false
		}
	case EditRecipeActionTypes.createRecipeSuccess:
		return {
			...state,
			createRecipeLoading: false
		}
	case EditRecipeActionTypes.createRecipeFailed:
		return {
			...state,
			createRecipeLoading: false,
			createRecipeErrorMessage: action.payload,
		}
	case EditRecipeActionTypes.updateRecipe:
		return {
			...state,
			updateRecipeLoading: true
		}
	case EditRecipeActionTypes.updateRecipeSuccess:
		return {
			...state,
			updateRecipeLoading: false
		}
	case EditRecipeActionTypes.updateRecipeFailed:
		return {
			...state,
			updateRecipeLoading: false,
			updateRecipeErrorMessage: action.payload
		}
	case EditRecipeActionTypes.loadRecipe:
		return {
			...state,
			loadRecipeLoading: true
		}
	case EditRecipeActionTypes.loadRecipeSuccess:
		return {
			...state,
			currentRecipe: action.payload,
			loadRecipeLoading: false
		}
	case EditRecipeActionTypes.loadRecipeFailed:
		return {
			...state,
			loadRecipeLoading: false
		}
	case EditRecipeActionTypes.clearCurrentRecipe:
		return {
			...state,
			currentRecipe: {...clearedRecipe}
		}
	case EditRecipeActionTypes.loadRecipeImages:
		return {
			...state,
			loadRecipeImagesLoading: true
		}
	case EditRecipeActionTypes.loadRecipeImagesSuccess:
		return {
			...state,
			currentRecipe: {
				...state.currentRecipe,
				images: [ ...action.payload ]
			},
			loadRecipeImagesLoading: false
		}
	case EditRecipeActionTypes.loadRecipeImagesFailed:
		return {
			...state,
			loadRecipeImagesLoading: false
		}
	case EditRecipeActionTypes.searchIngredientSuccess:
		return {
			...state,
			ingredientSearchResult: action.payload
		}
	case EditRecipeActionTypes.addIngredientItem:
		return {
			...state,
			currentRecipe: { ...state.currentRecipe, ingredients: [ ...state.currentRecipe.ingredients, action.payload ] }
		}
	case EditRecipeActionTypes.removeIngredientItem:
		return {
			...state,
			currentRecipe: { ...state.currentRecipe, ingredients: state.currentRecipe.ingredients.filter(ingredient => ingredient.id !== action.payload.id)}
		}
	default:
		return state;
	}
}
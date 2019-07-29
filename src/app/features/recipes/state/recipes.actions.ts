import { IRecipe } from 'src/app/models/recipe';

export enum RecipesActionTypes {
	addRecipe = '[Add Recipe] Add a recipe to the view',
	searchRecipe = '[Search Recipe] Search for recipes',
	expandRecipe = '[Expand Recipe] Expand a recipe to see more',
	toggleRecipesView = '[Toggle Recipes View] Toggle grid or list view',
	toggleSideMenu = '[Toggle Side Menu] Toggle the side menu',
	deleteRecipe = '[Delete Recipe] Delete a recipe',
	deleteRecipeSuccess = '[Delete Recipe Success] Successfully deleted a recipe',
	deleteRecipeFailed = '[Delete Recipe Failed] Failed to delete a recipe',
	loadRecipes = '[Load Recipes] Load all recipes',
	loadRecipesSuccess = '[Load Recipes Success] Successfully loaded all recipes',
	loadRecipesFailed = '[Load Recipes Failed] Failed to load all recipes'
}

export class AddRecipe {
	type = RecipesActionTypes.addRecipe;
	constructor (public payload: IRecipe) {}
}

export class SearchRecipe {
	type = RecipesActionTypes.searchRecipe;
	constructor (public payload: string) {}
}

export class ExpandRecipe {
	type = RecipesActionTypes.expandRecipe;
	constructor (public payload: string) {}
}

export class ToggleRecipesView {
	type = RecipesActionTypes.toggleRecipesView;
	constructor (public payload: string) {}
}

export class ToggleSideMenu {
	type = RecipesActionTypes.toggleSideMenu;
	constructor (public payload?: boolean) {}
}

export class DeleteRecipe {
	type = RecipesActionTypes.deleteRecipe;
	constructor (public payload: string) {}
}

export class DeleteRecipeSuccess {
	type = RecipesActionTypes.deleteRecipeSuccess;
	constructor (public payload?: any) {}
}

export class DeleteRecipeFailed {
	type = RecipesActionTypes.deleteRecipeFailed;
	constructor (public payload: any) {}
}

export class LoadRecipes {
	type = RecipesActionTypes.loadRecipes;
	constructor (public payload: any) {}
}

export class LoadRecipesSuccess {
	type = RecipesActionTypes.loadRecipesSuccess;
	constructor (public payload: any) {}
}

export class LoadRecipesFailed {
	type = RecipesActionTypes.loadRecipesFailed;
	constructor (public payload: any) {}
}

export type RecipesActions = AddRecipe
| SearchRecipe
| ExpandRecipe
| ToggleRecipesView
| DeleteRecipe
| DeleteRecipeSuccess
| DeleteRecipeFailed
| LoadRecipes
| LoadRecipesSuccess
| LoadRecipesFailed;

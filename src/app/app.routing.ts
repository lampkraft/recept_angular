import { Routes } from '@angular/router';
import { RecipesComponent } from './features/recipes/recipes.component';
import { LoginComponent } from './features/login/login.component';
import { EditRecipeComponent } from './features/edit-recipe/edit-recipe.component';

export const appRoutes: Routes = [
	{ path: 'recipes', component: RecipesComponent },
	{ path: '',   redirectTo: '/recipes', pathMatch: 'full' },
	{ path: 'recipe',   component: EditRecipeComponent },
	{ path: 'login',   component: LoginComponent },

	// { path: '**', component: PageNotFoundComponent }
];
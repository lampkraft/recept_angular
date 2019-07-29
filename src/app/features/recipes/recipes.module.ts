import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesComponent } from './recipes.component';
import { StoreModule } from '@ngrx/store';
import { recipesReducer } from './state/recipes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RecipesEffects } from './state/recipes.effects';
import { CommonModule } from '@angular/common';
import { RecipePostComponent } from './components/recipe-post/recipe-post.component';
import { QuickActionComponent } from './components/quick-action/quick-action.component';
import { SearchRecipesComponent } from './components/search/search-recipes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RecipeService } from '../../services/recipes.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipePostListComponent } from './components/recipe-post/list/recipe-post-list.component';

@NgModule({
  declarations: [
    RecipePostListComponent,
    RecipePostComponent,
    QuickActionComponent,
    RecipesComponent,
    SearchRecipesComponent,
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    CommonModule,
    StoreModule.forFeature('recipes', recipesReducer),
    EffectsModule.forFeature([RecipesEffects])
  ],
  exports: [
  ],
  providers: [HttpClient, RecipeService]
})
export class RecipesModule { }

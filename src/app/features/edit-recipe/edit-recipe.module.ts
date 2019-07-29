import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRecipeComponent } from './edit-recipe.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { AddIngredientComponent } from './components/ingredients/add-ingredient/add-ingredient.component';
import { ImageUploadService } from './services/image-upload.service';
import { IngredientListComponent } from './components/ingredients/ingredient-list/ingredient-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { editRecipeReducer } from './state/edit-recipe.reducer';
import { EditRecipeEffects } from './state/edit-recipe.effects';
import { CreateRecipePageComponent } from './components/modes/create/create-recipe.component';
import { ViewRecipePageComponent } from './components/modes/view/view-recipe.component';
import { AddIngredientItemSheetComponent } from './components/ingredients/add-ingredient-item-sheet/add-ingredient-item-sheet.component';
import { AddIngredientDialogComponent } from './components/ingredients/add-ingredient-dialog/add-ingredient-dialog.component';

@NgModule({
  declarations: [
    EditRecipeComponent,
    ImageUploaderComponent,
    AddIngredientComponent,
    IngredientListComponent,
    CreateRecipePageComponent,
    ViewRecipePageComponent,
    AddIngredientItemSheetComponent,
    AddIngredientDialogComponent
  ],
  entryComponents: [
    AddIngredientItemSheetComponent,
    AddIngredientDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('edit-recipe', editRecipeReducer),
    EffectsModule.forFeature([EditRecipeEffects])
  ],
  providers: [
    ImageUploadService
  ],
})
export class EditRecipeModule { }

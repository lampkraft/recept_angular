import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ImageUploadService } from './services/image-upload.service';
import { CreateRecipe, LoadRecipe, LoadRecipeImages, UpdateRecipe, DeleteRecipeImages, ClearCurrentRecipe, RemoveIngredientItem } from './state/edit-recipe.actions';
import { IRecipe, IRecipeImage } from 'src/app/models/recipe';
import { Observable, Subject } from 'rxjs';
import { selectCurrentRecipe, selectLoading, selectIngredientItems } from './state/edit-recipe.selectors';
import { takeUntil } from 'rxjs/operators';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddIngredientItemSheetComponent } from './components/ingredients/add-ingredient-item-sheet/add-ingredient-item-sheet.component';
import { Loading } from './model/loading.interface';

@Component({
  selector: 'recept-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.less']
})
export class EditRecipeComponent implements OnInit {
  pageType: string;
  edit: string;
  title: string;
  recipeId: string;
  currentRecipe: IRecipe;
  currentRecipeSubscriber$: Subject<void> = new Subject();
  loading: Loading;
  loadingSubscriber$: Subject<void> = new Subject();
  ingredientItems: any[];
  ingredientItemsSubscriber$: Subject<void> = new Subject();

  readonly titles = {
    create: 'Nytt Recept',
    edit: 'Ändra Recept',
    view: 'Recept'
  }

  constructor(private bottomSheet: MatBottomSheet, private store: Store<any>, private imageUploadService: ImageUploadService, private router: Router) { }

  ngOnInit () {
    const urlParams = this.router.parseUrl(this.router.url).queryParams;
    this.recipeId = urlParams['id'];
    console.log('urlParams:', urlParams);
    this.refreshPageSettings(urlParams['edit']);

    this.store.pipe(select(selectCurrentRecipe), takeUntil(this.currentRecipeSubscriber$)).subscribe((currentRecipe: IRecipe) => {
      this.currentRecipe = currentRecipe;
    });
    this.store.pipe(select(selectLoading), takeUntil(this.loadingSubscriber$)).subscribe((loading: Loading) => {
      this.loading = loading;
    });
    this.store.pipe(select(selectIngredientItems), takeUntil(this.ingredientItemsSubscriber$)).subscribe((ingredientItems: any[]) => {
      this.ingredientItems = ingredientItems;
    });
  }

  refreshPageSettings (editMode: string): void {
    if (this.recipeId) {
      this.store.dispatch(new LoadRecipe(this.recipeId));
      this.store.dispatch(new LoadRecipeImages(this.recipeId));
    }
    this.edit = editMode;
    this.pageType = this.edit == null ? 'view' : this.edit === 'true' ? 'edit' : 'create';
    this.title = this.titles[this.pageType];
  }

  createRecipe (recipeData: IRecipe) {
    this.store.dispatch(new CreateRecipe(recipeData));
		this.navigateToRecipes();
  }

  updateRecipe (recipeData: IRecipe) {
    this.store.dispatch(new UpdateRecipe(recipeData));
		this.navigateToRecipes();
  }

  deleteRecipeImages (images: IRecipeImage[]) {
    this.store.dispatch(new DeleteRecipeImages(images));
  }

  addItem () {
    this.bottomSheet.open(AddIngredientItemSheetComponent);
  }

  removeIngredient (ingredient: any) {
    this.store.dispatch(new RemoveIngredientItem(ingredient));
  }

  navigateToRecipes() {
		this.router.navigateByUrl('/recipes');
  }

  navigateToEditRecipe() {
    this.router.navigateByUrl(`/recipe?edit=true&id=${this.recipeId}`);
    this.refreshPageSettings('true');
  }
  
  ngOnDestroy () {
    this.store.dispatch(new ClearCurrentRecipe(null));
    this.currentRecipeSubscriber$.next();
    this.currentRecipeSubscriber$.complete();
    this.loadingSubscriber$.next();
    this.loadingSubscriber$.complete();
  }
}

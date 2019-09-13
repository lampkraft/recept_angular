import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Store, select } from '@ngrx/store';
import { SearchIngredient, AddIngredientItem } from '../../../state/edit-recipe.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectIngredientSearchResult } from '../../../state/edit-recipe.selectors';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IIngredient } from 'src/app/models/recipe';

@Component({
  selector: 'recept-add-ingredient-dialog',
  templateUrl: './add-ingredient-dialog.component.html',
  styleUrls: ['./add-ingredient-dialog.component.scss']
})
export class AddIngredientDialogComponent {
  searchResult: any[];
  searchResultSubscriber$: Subject<void> = new Subject();
  selectedIngredient: IIngredient;

  constructor(private store: Store<any>, public dialogRef: MatDialogRef<AddIngredientDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit () {
    this.store.pipe(select(selectIngredientSearchResult), takeUntil(this.searchResultSubscriber$)).subscribe((searchResult: any[]) => {
      this.searchResult = searchResult;
    });
  }

  search(searchString: string) {
    this.store.dispatch(new SearchIngredient(searchString));
  }

  updateIngredient (ingredient: IIngredient) {
    this.selectedIngredient = ingredient;
  }

  accept () {
    this.store.dispatch(new AddIngredientItem(this.selectedIngredient));
    this.dialogRef.close();
  }

  cancel () {
    this.dialogRef.close();
  }

  ngOnDestroy () {
    this.searchResultSubscriber$.next();
    this.searchResultSubscriber$.complete();
  }

}

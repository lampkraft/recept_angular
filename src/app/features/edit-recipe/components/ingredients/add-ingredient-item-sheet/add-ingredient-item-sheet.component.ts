import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { AddIngredientDialogComponent } from '../add-ingredient-dialog/add-ingredient-dialog.component';

@Component({
  selector: 'recept-add-ingredient-item-sheet',
  templateUrl: './add-ingredient-item-sheet.component.html',
  styleUrls: ['./add-ingredient-item-sheet.component.less']
})
export class AddIngredientItemSheetComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef<AddIngredientItemSheetComponent>, private dialog: MatDialog) {}

  addIngredient () {
    let dialogRef = this.dialog.open(AddIngredientDialogComponent, {
    });
    this.bottomSheetRef.dismiss();
  }

}

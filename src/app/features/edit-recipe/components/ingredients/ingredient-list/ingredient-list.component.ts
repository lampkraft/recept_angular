import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { IIngredient } from 'src/app/models/recipe';

@Component({
  selector: 'recept-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
  @Output() remove: EventEmitter<IIngredient> = new EventEmitter();
  @Input() ingredients: IIngredient[];
  ingredientsById;

  constructor() {
    // this.ingredientsById = Object.keys(this.ingredients);
  }

  ngOnInit() {
  }

  onRemove (ingredient: IIngredient) {
    // delete this.ingredients[id];
    // this.ingredientsById = Object.keys(this.ingredients);
    this.remove.emit(ingredient);
  }

  drop (event: CdkDragDrop<string[]>) {
    moveItemInArray(this.ingredients, event.previousIndex, event.currentIndex);
  }

}

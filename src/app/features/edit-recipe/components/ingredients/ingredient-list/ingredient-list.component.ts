import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'recept-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.less']
})
export class IngredientListComponent implements OnInit {
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Input() ingredients: any[];
  ingredientsById;

  constructor() {
    // this.ingredientsById = Object.keys(this.ingredients);
  }

  ngOnInit() {
  }

  onRemove (ingredient: any) {
    // delete this.ingredients[id];
    // this.ingredientsById = Object.keys(this.ingredients);
    this.remove.emit(ingredient);
  }

}

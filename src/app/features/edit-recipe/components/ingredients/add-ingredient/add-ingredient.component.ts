import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchIngredient } from '../../../state/edit-recipe.actions';
import { IIngredient } from 'src/app/models/recipe';

@Component({
  selector: 'recept-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {
  @Output() updateIngredient: EventEmitter<IIngredient> = new EventEmitter();
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Input() searchResult: any[]; // IIngredient[];
  ingredient: any;
  amount: number;
  unit: string;

  constructor() { }

  ngOnInit() {
  }

  onUpdateIngredient (ingredient: any) {
    this.ingredient = ingredient;
    this.updateIngredient.emit({
      id: this.ingredient.id,
      name: this.ingredient.namn,
      amount: this.amount,
      unit: this.unit,
      order: 0
    });
  }

  doSearch (searchString: string) {
    this.search.emit(searchString);
  }

  onUpdateAmount (value: string) {
    this.amount = parseInt(value);
    this.updateIngredient.emit({
      id: this.ingredient.id,
      name: this.ingredient.namn,
      amount: this.amount,
      unit: this.unit,
      order: 0
    });
  }

  onUpdateUnit (value: string) {
    this.unit = value;
    this.updateIngredient.emit({
      id: this.ingredient.id,
      name: this.ingredient.namn,
      amount: this.amount,
      unit: this.unit,
      order: 0
    });
  }

}

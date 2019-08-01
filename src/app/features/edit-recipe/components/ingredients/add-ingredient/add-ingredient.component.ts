import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchIngredient } from '../../../state/edit-recipe.actions';

@Component({
  selector: 'recept-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.less']
})
export class AddIngredientComponent implements OnInit {
  @Output() addIngredient: EventEmitter<any> = new EventEmitter();
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Input() searchResult: any[];
  @Output() selectIngredient: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient () {
    this.addIngredient.emit();
  }

  doSearch (searchString: string) {
    this.search.emit(searchString);
  }

  onSelectIngredient (ingredient: any) {
    this.selectIngredient.emit(ingredient);
  }

}

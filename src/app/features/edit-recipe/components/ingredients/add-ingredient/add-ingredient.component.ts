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
  @Output() addIngredient: EventEmitter<IIngredient> = new EventEmitter();
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Input() searchResult: IIngredient[];
  @Output() selectIngredient: EventEmitter<IIngredient> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log(changes.searchResult);
  }

  onAddIngredient () {
    this.addIngredient.emit();
  }

  doSearch (searchString: string) {
    this.search.emit(searchString);
  }

  onSelectIngredient (ingredient: any) {
    this.selectIngredient.emit({
        id: ingredient.id,
        name: ingredient.namn,
        amount: 1,
        unit: 'L',
        order: 0
      });
  }

}

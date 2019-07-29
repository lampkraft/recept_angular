import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'recept-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.less']
})
export class IngredientListComponent implements OnInit {
  @Output() removeIngredient: EventEmitter<string> = new EventEmitter();
  @Input() ingredients: any = {
    '000': {
      id: '000',
      name: 'Tofu',
      amount: '10L',
    },
    '111': {
      id: '111',
      name: 'Kräm',
      amount: '1dl',
    },
    '222': {
      id: '222',
      name: 'Kyckling',
      amount: '100g',
    }
  };
  ingredientsById;

  constructor() {
    this.ingredientsById = Object.keys(this.ingredients);
  }

  ngOnInit() {
  }

  onRemoveIngredient (id: string) {
    delete this.ingredients[id];
    this.ingredientsById = Object.keys(this.ingredients);
    this.removeIngredient.emit(id);
  }

}

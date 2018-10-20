import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'recept-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less'],
})
export class RecipeComponent implements OnInit {
  @Input()
  recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../model/recipe';
import { Ingredient } from '../../../model/ingredient';
import { RecipeService } from '../../../services/recipe.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'recept-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  providers: [RecipeService]
})
export class MainComponent implements OnInit {
  recipes: Array<Recipe>;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    // this.recipes = [];
    // for (let i = 0; i < 20; i++) {
    //   this.recipes.push(
    //     new Recipe('Something random', 'Description', [new Ingredient('ingredient', 5)], 'image')
    //   );
    // }

    this.recipeService.fetchRecipes()
    .subscribe(
      (resp: Array<Recipe>) => {
        this.recipes = [];
        resp.forEach((r: Recipe) => {
          this.recipes.push(new Recipe(r));
        });
        console.log(this.recipes);
      },
      error => {
      }
    )

  }

}

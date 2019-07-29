import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchRecipe } from '../../state/recipes.actions';

@Component({
  selector: 'recept-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.less'],
})
export class SearchRecipesComponent implements OnInit {
  searchString: string = '';
  @Input() matchingRecipes: number;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  onSearch (searchString: string) {
    this.searchString = searchString;
    this.store.dispatch(new SearchRecipe(this.searchString.toLowerCase()));
  }

}

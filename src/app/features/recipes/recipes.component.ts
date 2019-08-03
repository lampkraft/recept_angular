import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToggleRecipesView, ExpandRecipe, LoadRecipes, DeleteRecipe } from './state/recipes.actions';
import { selectRecipePosts, selectExpandedRecipe, selectNoOfRecipes, selectRecipesView, selectShowSideMenu, selectLoading } from './state/recipes.selectors';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IRecipe } from 'src/app/models/recipe';
import { Loading } from './model/loading.interface';

@Component({
  selector: 'recept-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipePosts: IRecipe[];
  expandedPostSubscriber$ = new Subject<void>();
  expandedPost: string;
  noOfRecipes$: Observable<any>;
  recipesViewSubscriber$ = new Subject<void>();
  recipePostsSubscriber$ = new Subject<void>();
  loadingSubscriber$ = new Subject<void>();
  recipeView: string;
  loading: Loading;
  // @ViewChild('sidenav', {static: false}) sidenav;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new LoadRecipes(''));
    this.noOfRecipes$ = this.store.pipe(select(selectNoOfRecipes));
    this.store.pipe(select(selectExpandedRecipe), takeUntil(this.expandedPostSubscriber$)).subscribe((expandedPost: string) => {
      this.expandedPost = expandedPost;
    });
    this.store.pipe(select(selectRecipesView), takeUntil(this.recipesViewSubscriber$)).subscribe((recipeView: string) => {
      this.recipeView = recipeView;
    });
    this.store.pipe(select(selectRecipePosts), takeUntil(this.recipePostsSubscriber$)).subscribe((recipePosts: IRecipe[]) => {
      this.recipePosts = recipePosts;
    });
    this.store.pipe(select(selectLoading), takeUntil(this.loadingSubscriber$)).subscribe((loading: Loading) => {
      this.loading = loading;
    });
    
  }

  onToggleExpandPost (name: string) {
    if (this.expandedPost === name) {
      this.store.dispatch(new ExpandRecipe(''));
    } else {
      this.store.dispatch(new ExpandRecipe(name));
    }
  }

  ngOnDestroy () {
    this.expandedPostSubscriber$.next();
    this.expandedPostSubscriber$.complete();
    this.recipesViewSubscriber$.next();
    this.recipesViewSubscriber$.complete();
    this.recipePostsSubscriber$.next();
    this.recipePostsSubscriber$.complete();
    this.loadingSubscriber$.next();
    this.loadingSubscriber$.complete();
  }

  onToggleRecipesView (listOrGrid: string) {
    this.store.dispatch(new ToggleRecipesView(listOrGrid));
  }

  onDeleteRecipe (id: string) {
    this.store.dispatch(new DeleteRecipe(id));
  }
}

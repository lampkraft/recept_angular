import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectShowSideMenu, selectLoading } from './features/recipes/state/recipes.selectors';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddRecipe, ToggleSideMenu, LoadRecipes } from './features/recipes/state/recipes.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'recept';
  showSideMenu: boolean;
  showSideMenuSubscriber$ = new Subject<void>();

  constructor (private store: Store<any>, private router: Router) {}

  ngOnInit () {
    // for (let i = 0; i < data.length; i++) {
    //   this.store.dispatch(new AddRecipe(data[i]));
    // }
    this.store.pipe(select(selectShowSideMenu), takeUntil(this.showSideMenuSubscriber$)).subscribe((showSideMenu: boolean) => {
      this.showSideMenu = showSideMenu;
    });
  }

  navigateHome () {
    this.router.navigateByUrl('/recipes');
    this.closeSideMenu();
  }

  navigateLogin () {
    this.router.navigateByUrl('/login');
    this.closeSideMenu();
  }

  closeSideMenu () {
		this.store.dispatch(new ToggleSideMenu(false));
	}

  ngOnDestroy () {
    this.showSideMenuSubscriber$.next(),
    this.showSideMenuSubscriber$.complete();
  }
  
}

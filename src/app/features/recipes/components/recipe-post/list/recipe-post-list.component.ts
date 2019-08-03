import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IRecipe } from '../../../../../models/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'recept-recipe-post-list',
  templateUrl: './recipe-post-list.component.html',
  styleUrls: ['./recipe-post-list.component.scss'],
})
export class RecipePostListComponent implements OnInit {
  @Input() recipe: IRecipe;
  @Output() deleteRecipe = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit() {
  }

  onDeleteRecipe () {
    this.deleteRecipe.emit(this.recipe.id);
  }

  navigateToEditRecipe (id: string) {
    this.router.navigateByUrl(`/recipe?edit=true&id=${id}`);
  }

  navigateToViewRecipe (id: string) {
    this.router.navigateByUrl(`/recipe?id=${id}`);
  }
}

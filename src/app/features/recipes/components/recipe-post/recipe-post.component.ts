import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IRecipe } from 'src/app/models/recipe';

@Component({
  selector: 'recept-recipe-post',
  templateUrl: './recipe-post.component.html',
  styleUrls: ['./recipe-post.component.scss'],
})
export class RecipePostComponent implements OnInit {
  @Input() recipe: IRecipe;
  @Input() isExpanded: boolean;
  @Input() recipeView: string;
  @Output() toggledExpandPost = new EventEmitter<string>();
  @Output() deleteRecipe = new EventEmitter<string>();
  thumbnail: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'fullscreen',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/fullscreen-icon.svg'));
  }

  ngOnInit() {
  }

  ngOnChanges (changes) {
		if (changes && changes.recipe && changes.recipe.currentVaule && changes.recipe.currentVaule.images) {
			this.thumbnail = changes.recipe.currentVaule.images.length > 0 && changes.recipe.currentVaule.images[0].base64Image;
		}
	}

  expandPost (title: string) {
    this.toggledExpandPost.emit(title);
  }

  onDeleteRecipe () {
    this.deleteRecipe.emit(this.recipe.id);
  }
}

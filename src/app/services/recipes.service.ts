import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseServiceUrl, baseHeaderOptions } from 'src/constants';
import { IRecipeForRequest, IRecipeImage } from '../models/recipe';

@Injectable()
export class RecipeService {
	private readonly recipeBaseUri: string = baseServiceUrl + '/recipes';

	constructor(private http: HttpClient) {}

	loadRecipe(recipeId: string): Observable<any> {
		return this.http.get(`${this.recipeBaseUri}/${recipeId}`, baseHeaderOptions);
	}

	loadAllRecipes(): Observable<any> {
		return this.http.get(`${this.recipeBaseUri}`, baseHeaderOptions);
	}

	updateRecipe(recipeId: string, recipeData: IRecipeForRequest): Observable<any> {
		return this.http.put(`${this.recipeBaseUri}/${recipeId}`, { name: recipeData.name, description: recipeData.description, base64Thumbnail: recipeData.base64Thumbnail }, baseHeaderOptions);
	}

	createRecipe(recipeData: IRecipeForRequest): Observable<any> {
		return this.http.post(`${this.recipeBaseUri}`, { name: recipeData.name, description: recipeData.description, base64Thumbnail: recipeData.base64Thumbnail }, baseHeaderOptions);
	}

	deleteRecipe(recipeId: string): Observable<any> {
		return this.http.delete(`${this.recipeBaseUri}/${recipeId}`, baseHeaderOptions);
	}

	createRecipeImages(recipeId: string, images: string[]): Observable<any> {
		return this.http.post(`${this.recipeBaseUri}/${recipeId}/images`, images, baseHeaderOptions);
	}

	loadRecipeImages(recipeId: string): Observable<any> {
		return this.http.get(`${this.recipeBaseUri}/${recipeId}/images`, baseHeaderOptions);
	}

	deleteRecipeImages(recipeId: string, imagesById: string): Observable<any> {
		return this.http.delete(`${this.recipeBaseUri}/${recipeId}/images/${imagesById}`, baseHeaderOptions);
	}
}
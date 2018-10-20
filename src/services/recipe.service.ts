import { Injectable } from "@angular/core";
import { Recipe } from "../model/recipe";
import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { baseServiceUrl } from "../constants";
import { catchError } from 'rxjs/operators';

@Injectable()
export class RecipeService {

	private readonly recipeUri: string = baseServiceUrl + '/recipe';

	constructor(private http: HttpClient) {
	}

	fetchRecipes(): Observable<Array<Recipe>> {
		return this.http.get<Array<Recipe>>(this.recipeUri); // .pipe(catchError(this.handleError))
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError(
			'Something bad happened; please try again later.');
	};
}


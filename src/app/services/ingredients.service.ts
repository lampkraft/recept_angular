import { IRecipeForRequest, IRecipeImage } from '../models/recipe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { baseHeaderOptions } from 'src/constants';

@Injectable()
export class IngredientsService {
	constructor(private http: HttpClient) {}

	searchIngredient(searchString: string): Observable<any> {
		// TODO store url some other way
		return new Observable(subscriber => {
			subscriber.next([{
					name: 'Keso'
				},
				{
					name: 'Annanas'
				},
				{
					name: 'Broccoli'
				}]);
		});
		// https://www7.slv.se/SokNaringsinnehall/Home/HamtaLivsmedelTillAutoComplete?sokOrd=${searchString}&soktyp=1&_=1564687838842
		// return this.http.get(`http://www7.slv.se/apilivsmedel/LivsmedelService.svc/Livsmedel/Klassificering/20170101`);
	}
}
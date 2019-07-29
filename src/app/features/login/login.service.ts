import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseServiceUrl, baseHeaderOptions } from 'src/constants';

@Injectable()
export class LoginService {
	private readonly recipeBaseUri: string = baseServiceUrl + '/recipes';

	constructor(private http: HttpClient) {}

	login(id: string): Observable<any> {
		return this.http.post(`${this.recipeBaseUri}/${id}`, baseHeaderOptions);
	}
}
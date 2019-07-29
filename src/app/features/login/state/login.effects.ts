import { Observable, of } from "rxjs";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { LoginActions, LoginActionTypes, DoLoginSuccess, DoLoginFailed } from './login.actions';
import { LoginService } from '../login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginEffects {

	constructor(private actions$: Actions, private loginService: LoginService) {}

	@Effect()
	login$: Observable<any> = this.actions$.pipe(
		ofType(LoginActionTypes.doLogin),
		mergeMap((action: LoginActions) => this.loginService.login(action.payload)
		.pipe(
			map(response => new DoLoginSuccess(response)),
			catchError(err => of(new DoLoginFailed(err)))
		))
	)
}
export class DoLogin {
	type = LoginActionTypes.doLogin;
	constructor (public payload: any) {}
}
export class DoLoginSuccess {
	type = LoginActionTypes.doLogin;
	constructor (public payload: any) {}
}
export class DoLoginFailed {
	type = LoginActionTypes.doLogin;
	constructor (public payload: any) {}
}


export enum LoginActionTypes {
	doLogin = '[Login] Logging in',
	doLoginSuccess = '[Login] Success',
	doLoginFailed = '[Login] Failed',
}

export type LoginActions = DoLogin | DoLoginSuccess | DoLoginFailed;

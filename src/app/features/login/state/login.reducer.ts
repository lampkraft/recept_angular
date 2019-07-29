import { LoginActionTypes, LoginActions } from './login.actions';

const initialState = {
	loginToken: {},
};

export function loginReducer (state = initialState, action: LoginActions) { // TODO ANY
	switch (action.type) {
	case LoginActionTypes.doLogin:
		return {
			...state,
			loginToken: action.payload
		};
	case LoginActionTypes.doLoginSuccess:
		return {
			...state
		};
	case LoginActionTypes.doLoginFailed:
		return {
			...state
		};
	default:
		return state;
	}
}
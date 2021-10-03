import { AuthState } from "../models/AuthState";

export const ACTIONS = {
	SIGN_IN: 'SIGN_IN'
}

interface ActionReducer {
	type: string;
	payload?: any;
}

export const authReducer = (state: AuthState, action: ActionReducer): AuthState => {
	if (action.type === ACTIONS.SIGN_IN) return { ...state, isLoggedIn: !state.isLoggedIn }
	return state;
}
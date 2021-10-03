import React, { createContext, useReducer } from 'react'
import { AuthContextProps, AuthState } from '../models/AuthState'
import { ACTIONS, authReducer } from './authReducer'

export const authInitialState: AuthState = {
	isLoggedIn: false
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider: React.FC = ({ children }) => {

	const [authState, dipatch] = useReducer(authReducer, authInitialState)

	const sigIn = () => dipatch({ type: ACTIONS.SIGN_IN })

	return (
		<AuthContext.Provider value={{
			authState,
			sigIn
		}}>
			{children}
		</AuthContext.Provider>
	);
}
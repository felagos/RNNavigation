export interface AuthState {
	isLoggedIn: boolean;
	userName?: string;
	favoriteIcon?: string;
}

export interface AuthContextProps {
	authState: AuthState;
	sigIn: () => void;
}

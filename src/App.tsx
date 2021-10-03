import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './navigation/TabNavigation';
import { AuthProvider } from './context/AuthContext';


export const App = () => {
	return (
		<NavigationContainer>
			<AuthProvider>
				<TabNavigation />
			</AuthProvider>
		</NavigationContainer>
	);
}

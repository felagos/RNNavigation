import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { LateralMenuNavigation } from './navigation/LateralMenuNavigation';


export const App = () => {
	return (
		<NavigationContainer>
			<LateralMenuNavigation />
		</NavigationContainer>
	);
}

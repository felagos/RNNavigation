import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from './navigation/DrawerNavigation';
import { TabNavigation } from './navigation/TabNavigation';


export const App = () => {
	return (
		<NavigationContainer>
			<TabNavigation />
		</NavigationContainer>
	);
}

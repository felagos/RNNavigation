import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';

const Stack = createStackNavigator();

export type StackParamList = {
	Page1Screen: undefined;
	Page2Screen: undefined;
	Page3Screen: undefined;
}

export enum StackScreens {
	Page1Screen = 'Page1Screen',
	Page2Screen = 'Page2Screen',
	Page3Screen = 'Page3Screen'
}

export const StackNavigation = () => {
	return (
		<Stack.Navigator initialRouteName={StackScreens.Page1Screen}>
			<Stack.Screen name={StackScreens.Page1Screen} component={Page1Screen} />
			<Stack.Screen name={StackScreens.Page2Screen} component={Page2Screen} />
			<Stack.Screen name={StackScreens.Page3Screen} component={Page3Screen} />
		</Stack.Navigator>
	);
}
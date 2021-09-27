import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';
import { PeopleScreen } from '../screens/PeopleScreen';
import { Person } from '../models/Person';

const Stack = createStackNavigator();

export type StackParamList = {
	Page1Screen: undefined;
	Page2Screen: undefined;
	Page3Screen: undefined;
	PeopleScreen: Person;
}

export enum StackScreens {
	Page1Screen = 'Page1Screen',
	Page2Screen = 'Page2Screen',
	Page3Screen = 'Page3Screen',
	PeopleScreen = 'PeopleScreen'
}

export const StackNavigation = () => {
	return (
		<Stack.Navigator initialRouteName={StackScreens.Page1Screen} screenOptions={{
			headerStyle: {
				elevation: 0,
				shadowColor: 'transparent'
			},
			cardStyle: {
				backgroundColor: 'white'
			}
		}}>
			<Stack.Screen name={StackScreens.Page1Screen} component={Page1Screen} options={{ title: 'Page 1' }} />
			<Stack.Screen name={StackScreens.Page2Screen} component={Page2Screen} options={{ title: 'Page 2' }} />
			<Stack.Screen name={StackScreens.Page3Screen} component={Page3Screen} options={{ title: 'Page 3' }} />
			<Stack.Screen name={StackScreens.PeopleScreen} component={PeopleScreen} options={{ title: 'People' }} />
		</Stack.Navigator>
	);
}
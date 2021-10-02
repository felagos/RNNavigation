import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tab1Screen } from '../screens/Tab1Screen'
import { Tab2Screen } from '../screens/Tab2Screen'
import { StackNavigation } from './StackNavigation'
import { Platform, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/AntDesign';

enum TabScreens {
	TAB1 = "Tab 1",
	TAB2 = "Tab 2",
	TAB3 = "Tab 3"
}

const BottomTabIOS = createBottomTabNavigator()
const BotomTabAndroid = createMaterialBottomTabNavigator()

const getIcon = (routeName: string) => {
	if (routeName === TabScreens.TAB1) return 'home'
	if (routeName === TabScreens.TAB2) return 'enviromento'
	return 'menufold'
}

const TabIOS = () => {
	return (
		<BottomTabIOS.Navigator screenOptions={({ route }) => ({
			headerShown: false,
			tabBarActiveTintColor: 'red',
			tabBarStyle: {
				elevation: 5
			},
			tabBarLabelStyle: {
				fontSize: 15
			},
			tabBarIcon: ({ color, focused }) => {
				const iconaName = getIcon(route.name)
					return <Icon size={15} name={iconaName} color={color} />
			}
		}
		)}>
			<BottomTabIOS.Screen name={TabScreens.TAB1} component={Tab1Screen} />
			<BottomTabIOS.Screen name={TabScreens.TAB2} component={Tab2Screen} />
			<BottomTabIOS.Screen name={TabScreens.TAB3} component={StackNavigation} />
		</BottomTabIOS.Navigator>
	)
}

const TabAndroid = () => {
	return (
		<BotomTabAndroid.Navigator
			sceneAnimationEnabled
			barStyle={{
				backgroundColor: styles.primary.color
			}}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					const iconaName = getIcon(route.name)
					return <Icon size={15} name={iconaName} color={color} />
				}
			})}
		>
			<BotomTabAndroid.Screen name={TabScreens.TAB1} component={Tab1Screen} />
			<BotomTabAndroid.Screen name={TabScreens.TAB2} component={Tab2Screen} />
			<BotomTabAndroid.Screen name={TabScreens.TAB3} component={StackNavigation} />
		</BotomTabAndroid.Navigator>
	)
}

export const TabNavigation = () => Platform.OS === 'android' ? <TabAndroid /> : <TabIOS />


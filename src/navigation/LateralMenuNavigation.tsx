import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { StackNavigation } from './StackNavigation'
import { SettingsScreen } from '../screens/SettingsScreen'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'

const Drawer = createDrawerNavigator()

export enum MenuScreens {
	StackNavigation = 'StackNavigation',
	SettingsScreen = "SettingsScreen"
}

export const LateralMenuNavigation = () => {
	return (
		<Drawer.Navigator screenOptions={{ headerShown: true }}
			drawerContent={(props: DrawerContentComponentProps) => <MenuContent {...props} />} >
			<Drawer.Screen name={MenuScreens.StackNavigation} component={StackNavigation} options={{ title: 'Home' }} />
			<Drawer.Screen name={MenuScreens.SettingsScreen} component={SettingsScreen} options={{ title: 'Settings' }} />
		</Drawer.Navigator>
	)
}

const MenuContent = ({ navigation }: DrawerContentComponentProps) => (
	<DrawerContentScrollView>
		<View style={styles.menuContainer}>
			<TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(MenuScreens.StackNavigation)}>
				<Text style={styles.menuText}>Home</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(MenuScreens.SettingsScreen)}>
				<Text style={styles.menuText}>Settings</Text>
			</TouchableOpacity>

		</View>
	</DrawerContentScrollView>
)
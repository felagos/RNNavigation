import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ChatScreen } from "../screens/ChatScreen";
import { ContactsScreen } from "../screens/ContactsScreen";
import { AlbumsScreen } from "../screens/AlbumsScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../theme/appTheme";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();

enum TopBarScreens {
	CHAT = "Chat",
	CONTACTS = "Contacs",
	ALBUMS = "Albums"
}

const getIcon = (routeName: string) => {
	if (routeName === TopBarScreens.CHAT) return 'chat'
	if (routeName === TopBarScreens.CONTACTS) return 'contacts'
	return 'album'
}

export const TopTabNavigation = () => {

	const { top: paddingTop } = useSafeAreaInsets()

	return (
		<Tab.Navigator
			style={{ paddingTop }}
			sceneContainerStyle={{
				backgroundColor: 'white',
			}}
			screenOptions={({ route }) => ({
				tabBarPressColor: styles.primary.color,
				tabBarShowIcon: true,
				tabBarIndicatorStyle: { backgroundColor: styles.primary.color },
				tabBarStyle: { elevation: 0, borderBottomWidth: 0 },
				tabBarIcon: ({ color }) => <Icon size={15} name={getIcon(route.name)} color={color} />
			})}
		>
			<Tab.Screen name={TopBarScreens.CHAT} component={ChatScreen} />
			<Tab.Screen name={TopBarScreens.CONTACTS} component={ContactsScreen} />
			<Tab.Screen name={TopBarScreens.ALBUMS} component={AlbumsScreen} />
		</Tab.Navigator>
	);
}
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import { StackParamList, StackScreens } from '../navigation/StackNavigation';
import { styles } from '../theme/appTheme'


interface Props extends StackScreenProps<StackParamList, StackScreens.PeopleScreen> { }

export const PeopleScreen = ({ route }: Props) => {
	const { id, name } = route.params

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>ID: {id}</Text>
			<Text style={styles.title}>NAME: {name}</Text>
		</View>
	)
	
}

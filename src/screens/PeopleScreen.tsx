import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native'
import { StackParamList, StackScreens } from '../navigation/StackNavigation';
import { styles } from '../theme/appTheme'


interface Props extends StackScreenProps<StackParamList, StackScreens.PeopleScreen> { }

export const PeopleScreen = ({ route, navigation }: Props) => {
	const { id, name } = route.params

	useEffect(() => {
		navigation.setOptions({ title: 'Person Detail' })
	}, [navigation])

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>ID: {id}</Text>
			<Text style={styles.title}>NAME: {name}</Text>
		</View>
	)

}

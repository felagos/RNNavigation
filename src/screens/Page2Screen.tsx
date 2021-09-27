import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackParamList, StackScreens } from '../navigation/StackNavigation'
import { StackNavigationProp } from '@react-navigation/stack'

type StackProps = StackNavigationProp<StackParamList, StackScreens.Page2Screen>;

export const Page2Screen = () => {
	const navigation = useNavigation<StackProps>()

	useEffect(() => {
		navigation.setOptions({
			title: 'hola mundo',
			headerBackTitle: 'Atrás'
		})
	}, [navigation])

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Page2Screen</Text>
			<Button title="Ir pagina 3" onPress={() => navigation.navigate(StackScreens.Page3Screen)} />
		</View>
	)
}

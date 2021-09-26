import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native'
import { StackParamList, StackScreens } from '../navigation/StackNavigation'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<StackParamList, StackScreens.Page1Screen> {}

export const Page1Screen = ({ navigation }: Props) => {
	return (
		<View style={styles.globalMargin}>
			<Text>Page1Screen</Text>
			<Button title="Ir pagina 2" onPress={() => navigation.push(StackScreens.Page2Screen)} />
		</View>
	)
}

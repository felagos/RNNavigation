import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native'
import { StackParamList, StackScreens } from '../navigation/StackNavigation'

interface Props extends StackScreenProps<StackParamList, StackScreens.Page1Screen> {}

export const Page1Screen = ({ navigation }: Props) => {
	return (
		<View>
			<Button title="press me" onPress={() => navigation.push(StackScreens.Page2Screen)} />
			<Text>Page1Screen</Text>
		</View>
	)
}

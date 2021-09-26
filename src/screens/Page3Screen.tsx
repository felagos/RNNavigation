import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native'
import { StackParamList, StackScreens } from '../navigation/StackNavigation';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';

type StackProps = StackNavigationProp<StackParamList, StackScreens.Page2Screen>;

export const Page3Screen = () => {
	const navigation = useNavigation<StackProps>();

	return (
		<View style={styles.globalMargin}>
			<Text>Page3Screen</Text>
			<Button title="Back" onPress={() => navigation.goBack()} />
		</View>
	)
}

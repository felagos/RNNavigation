import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { StackParamList, StackScreens } from '../navigation/StackNavigation'
import { styles as stylesGlobal } from '../theme/appTheme'
import { Person } from '../models/Person'

interface Props extends StackScreenProps<StackParamList, StackScreens.Page1Screen> { }

const person: Person = {
	id: Date.now(),
	name: 'Jotaro'
}

export const Page1Screen = ({ navigation }: Props) => {
	return (
		<View style={stylesGlobal.globalMargin}>
			<Text style={stylesGlobal.title}>Page1Screen</Text>
			<Button title="Ir pagina 2" onPress={() => navigation.push(StackScreens.Page2Screen)} />
			
			<TouchableOpacity style={styles.btn} onPress={() => navigation.push(StackScreens.PeopleScreen, person)}>
				<Text>Ir a personas</Text>
			</TouchableOpacity>
		
		</View>
	)
}


const styles = StyleSheet.create({
	btn: {
		marginTop: 10
	}
});
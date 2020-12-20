import 'react-native-gesture-handler';
import React from "react";
import { Text } from 'react-native'

import Routes from './routes';

import styled from 'styled-components/native';

const Container = styled.View`
    justify-content: center;
    align-items: center;
    flex:1;
`

export default function App() {
	return (
		<Routes />
	);
}
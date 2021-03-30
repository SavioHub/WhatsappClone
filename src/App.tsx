import 'react-native-gesture-handler';
import React from 'react';

import Routes from './routes';

import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default function App() {
  return <Routes />;
}

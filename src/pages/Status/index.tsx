import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  AddStatus,
  Plus,
  Camera,
  MyStatus,
  Titulo,
  SubTitulo,
  Image,
  MyStatusContainer
} from './status.css';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Status = () => {
  return (
    <Container>
      <MyStatus>
        <Image>
          <Plus>
            <Feather name="plus" size={20} color="#FFFAFA" />
          </Plus>
        </Image>
        <MyStatusContainer>
          <Titulo>Meu status</Titulo>
          <SubTitulo>Toque para adicionar seus status</SubTitulo>
        </MyStatusContainer>
      </MyStatus>

      <AddStatus>
        <MaterialCommunityIcons name="pencil" size={24} color="#FFFAFA" />
      </AddStatus>

      <Camera>
        <MaterialIcons name="camera-alt" size={26} color="#FFFAFA" />
      </Camera>
    </Container>
  );
};

export default Status;

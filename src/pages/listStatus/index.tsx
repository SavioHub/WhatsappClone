import React from 'react';
import { Text, } from 'react-native';
import { Container,AddStatus, Plus, Camera, MyStatus, Photo, Titulo, SubTitulo, Image, MyStatusContainer} from "./status.css"
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import profile from '../../assets/profile.png'; 

const Status = () => {
    return(
        <Container> 
           <MyStatus>
                <Photo imageStyle={{borderRadius: 30}} source={profile}>
                    <Plus>
                        <Feather name="plus" size={20} color="#e6dada" />
                    </Plus>
                </Photo>           
                   
               <MyStatusContainer>
                   <Titulo>
                        Meu status
                   </Titulo>
                    <SubTitulo>
                        Toque para adicionar seus status
                    </SubTitulo>
               </MyStatusContainer>
           </MyStatus>
             
            <AddStatus>
                <MaterialCommunityIcons name="pencil" size={24} color="#FFFAFA" />
            </AddStatus>
            
            <Camera>
                <MaterialIcons name="camera-alt" size={26} color="#FFFAFA" />
            </Camera>
        </Container>
    )
}

export default Status;
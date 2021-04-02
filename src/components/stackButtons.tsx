import React from 'react';
import { TouchableHighlight,Text } from 'react-native';
import styled from 'styled-components/native';
import { SimpleLineIcons,Ionicons } from '@expo/vector-icons';

const Container = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const Buttons = () => {
    return( 
        <Container>
            <TouchableHighlight>
                <Ionicons name="search" size={17} color="#b3b3b3" style={{marginRight: 15}} />
            </TouchableHighlight>
            <TouchableHighlight>
                <SimpleLineIcons name="options-vertical" size={17} color="#b3b3b3" style={{marginRight: 15}}/>
            </TouchableHighlight>
        </Container>
    );
}

export default Buttons;
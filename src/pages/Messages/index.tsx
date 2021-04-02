import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList, View, Text } from 'react-native';

import {
  Container,
  StartMessage,
  MessageArea,
  MessageText,
  Notification,
  Name,
  Photo,
  TimeTable,
  TextContainer,
  NotificationContainer,
  MessageContainer,
  Line
} from './message.css';

//@ts-ignore
import profile from '../../assets/profile.png';

const Message = () => {
  return (
    <Container>
      <FlatList
        data={[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25
        ]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Line />}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          paddingTop: 5
        }}
        renderItem={() => (
          <MessageArea>
            <Photo source={profile}></Photo>
            <MessageContainer>
              <TextContainer>
                <Name>Loli</Name>
                <MessageText>Oiii oni-chan</MessageText>
              </TextContainer>
              <NotificationContainer>
                <TimeTable>00:00</TimeTable>
                <Notification>
                  <Text style={{ fontSize: 10, fontWeight: 'bold' }}>2</Text>
                </Notification>
              </NotificationContainer>
            </MessageContainer>
          </MessageArea>
        )}
      />
      <StartMessage>
        <Icon name="android-messages" size={24} color="white" />
      </StartMessage>
    </Container>
  );
};

export default Message;

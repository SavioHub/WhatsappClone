import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    flex:1;
    background-color: #101e29;
    width: 100%;
    position: relative;
`;

export const StartMessage = styled.TouchableHighlight`
    width: 60px;
    height: 60px;
    background-color: #2baba4;
    position: absolute;
    bottom: 20px;
    right: 20px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    transform: scaleX(-1);
`;

export const MessageArea = styled.View`
    background-color: transparent;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding:6px;
    position: relative;
`;

export const Photo = styled.Image`
    width: 60px;
    height: 60px;
    background-color: white;
    opacity: 0.7;
    border-radius: 30px;
`;

export const MessageContainer = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    padding: 0 10px;
`;

export const TextContainer = styled.View`
    justify-content: center;
    align-items: flex-start;
`;

export const NotificationContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Name = styled.Text`
    color: #8b979e;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
`;

export const MessageText = styled.Text`
    color: #555f67;
`;

export const TimeTable = styled.Text`
    color: #8b979e;
    margin-bottom: 5px;
`;

export const Notification = styled.View`
    width: 22px;
    height: 22px;
    background-color: #2baba4;
    border-radius: 11px;
    justify-content: center;
    align-items: center;
`;

export const Line = styled.View`
    border-bottom-width: 0.5px;
    border-bottom-color: #313131;
    width: 85%;
    align-self: flex-end;
`;
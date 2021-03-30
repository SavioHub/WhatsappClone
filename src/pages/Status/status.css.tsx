import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    flex:1;
    width: 100%;
    background-color: #101e29;
    position: relative;
    padding-top: 40px;  
`

export const AddStatus = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
    background-color: #7d7f81;
    position: absolute;
    bottom: 97px;
    right: 26px;
    border-radius: 40px; 
    justify-content: center;
    align-items:center;
`
export const Camera = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: #43cebb;
    position: absolute;
    bottom: 20px;
    right: 17px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`
export const MyStatus = styled.View`
  width: 100%;
  background-color:transparent;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`
export const Titulo = styled.Text`
   color: #8b979e;
   font-weight:bold;
   font-size: 18px;
   
`
export const SubTitulo = styled.Text`
    color: #828b90;
`

export const Image = styled.View`
    width: 60px;
    height: 60px;
    background-color:blue;
    border-radius: 30px;
    position: relative;
`
export const MyStatusContainer =styled.View`
    padding: 0 10px;
    background-color: transparent;
`
export const Plus = styled.View`
    position: absolute;
    background-color: #43cebb;
    border-radius: 50px;
    bottom: 0;
    right: 0;        
`
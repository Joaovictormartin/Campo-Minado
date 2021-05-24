import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
 width: 100%;
 height: 100%;
 opacity: 0.9;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const Titulo = styled.Text`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  margin: 60px 0px;
`;

export const Texto = styled.Text`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0px;
`;

export const AreaBnt = styled.TouchableOpacity`
  width: 50%;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin: 60px 0px;

  border-color: rgb(60, 60, 60);
  border-width: 4px;
  border-radius: 10px;
`;

export const TextoBtn = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  color: white;
`;

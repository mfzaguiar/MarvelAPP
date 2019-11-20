import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: rgba(255, 255, 255, 0.2);
  margin: 5px;
`;

export const Image = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  height: ${Dimensions.get('window').height * 0.25};
`;

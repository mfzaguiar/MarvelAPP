import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: #e23636;
`;

export const HeaderImage = styled.ImageBackground.attrs({
  imageStyle: {
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderColor: 'rgba(0,0,0,0.8)',
    borderWidth: 1,
  },
})`
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ImageHeader = styled.Image`
  margin: 100px;
`;

export const Content = styled.View`
  flex: 1;
  background: #e23636;
`;

export const ButtonsContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.TouchableOpacity`
  height: ${Dimensions.get('window').height * 0.15};
  width: 90%;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const StyledIcon = styled(Icon).attrs({
  size: 40,
  color: '#fff',
})``;

export const ButtonText = styled.Text`
  font-size: 30px;
  color: #fff;
  font-family: 'Marvel-Regular';
  text-transform: uppercase;
  margin-right: 20px;
  letter-spacing: 1;
`;

export const ButtonImage = styled.Image`
  height: 64px;
  width: 64px;
`;

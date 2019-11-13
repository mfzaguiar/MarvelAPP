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
    borderColor: '#fff',
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
  padding: 10px;
  flex-direction: row;
`;

export const StyledButton = styled.TouchableOpacity`
  height: ${Dimensions.get('window').height * 0.1};
  width: ${Dimensions.get('window').width * 0.45};
  background: #fff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

export const StyledIcon = styled(Icon).attrs({
  size: 32,
  color: '#333',
})``;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
`;

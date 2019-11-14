import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';
import {Dimensions} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #e23636;
`;

export const Header = styled.View`
  height: ${Dimensions.get('window').height * 0.1};
  border-bottom-width: 2px;
  border-color: #fff;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 30px;
  margin: 5px 0 0 20px;
  text-transform: uppercase;
  font-family: 'Marvel-Regular';
`;

export const HeaderImage = styled.ImageBackground`
  flex: 1;
  padding: 20px 0 0 20px;
  flex-direction: row;
  align-items: flex-start;
`;

export const Form = styled.View`
  padding: 10px 5px;

  flex-direction: row;
`;

export const SubmitButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const Animation = styled(Lottie)`
  height: 120px;
  width: 120px;
  align-self: center;
  margin-top: 20px;
`;

export const HeroButton = styled.TouchableOpacity`
  flex: 1;
`;

export const HeroHeader = styled.View`
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  padding: 3px;
`;

export const HeroName = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 18px;
  color: #fff;
  font-family: 'Marvel-Regular';
  text-transform: uppercase;
`;

export const HeroImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  height: ${Dimensions.get('window').height * 0.25};
  margin: 5px;
`;

export const GifContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const ImageGif = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 30%;
  width: 100%;
`;

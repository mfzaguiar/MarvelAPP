import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Lottie from 'lottie-react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #e23636;
`;

export const Header = styled.View`
  height: ${Dimensions.get('window').height * 0.25};
  border-bottom-width: 3px;
  border-color: #fff;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 35px;
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

export const HeroContainer = styled.ScrollView`
  margin: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 1);
  top: -100px;
  padding: 20px;
  min-height: 80%;
`;

export const HeroImage = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 10px;
  align-self: center;
`;

export const Name = styled.Text`
  font-size: 28px;
  margin: 15px 0 0px 0;
  color: #504a4a;
  font-family: 'Marvel-Regular';
  text-transform: uppercase;
  text-align: center;
`;

export const Description = styled.Text`
  margin-top: 18px;
  line-height: 25;
  font-size: 16px;
  text-align: justify;
  color: #504a4a;
`;

export const Animation = styled(Lottie)`
  height: 120px;
  width: 120px;
  align-self: center;
  margin-top: 20px;
`;

export const FooterLink = styled.View`
  flex-direction: row;
  margin: 20px 0 20px 0;
`;

export const Link = styled.TouchableOpacity`
  height: 55px;
  background: #e23636;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
`;

export const LinkText = styled.Text`
  font-size: 22px;
  color: #fff;
  letter-spacing: 0.2;
  font-family: 'Marvel-Regular';
  text-transform: uppercase;
`;

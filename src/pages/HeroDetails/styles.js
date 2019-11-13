import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Lottie from 'lottie-react-native';

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
  font-size: 25px;
  font-weight: bold;
  margin-left: 20px;
`;

export const HeaderImage = styled.ImageBackground`
  flex: 1;
  padding: 20px 0 0 20px;
  flex-direction: row;
  align-items: flex-start;
`;

export const HeroContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 1);
  padding: 20px;
  top: -100px;
`;

export const HeroImage = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 10px;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 5px 0;
  color: #333;
`;

export const Description = styled.Text`
  margin-top: 18px;
  line-height: 25;
  font-size: 16px;
  text-align: justify;
  color: #333;
`;

export const Animation = styled(Lottie)`
  height: 120px;
  width: 120px;
  align-self: center;
  margin-top: 20px;
`;

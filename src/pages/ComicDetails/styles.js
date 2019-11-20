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

export const ComicContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 1);
  top: -100px;
  padding: 10px;
  min-height: 80%;
`;

export const SideContent = styled.View`
  flex: 1;
`;

export const ComicImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  padding: 5px;
  color: #504a4a;
  text-align: center;
`;

export const Description = styled.Text`
  margin: 5px 10px 20px 10px;
  line-height: 20;
  font-size: 15px;
  text-align: justify;
  color: #504a4a;
`;

export const ComicTopic = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #504a4a;
`;

export const ComicTopicDescription = styled.Text`
  margin: 10px 0 0 10px;
  font-size: 18px;
  font-weight: bold;
  color: #504a4a;
`;

export const ComicInfo = styled.Text`
  font-size: 14px;
  color: #504a4a;
`;

export const Animation = styled(Lottie)`
  height: 120px;
  width: 120px;
  align-self: center;
  margin-top: 20px;
`;

export const ComicDescContainer = styled.View`
  flex-direction: row;
  height: 220px;
`;

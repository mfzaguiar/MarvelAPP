import styled from 'styled-components/native';

export const HeroContainer = styled.View`
  height: 200px;
  padding: 20px 0;
  flex-direction: column;
  align-self: center;
  background: #e23636;
`;

export const Item = styled.TouchableOpacity`
  height: 120px;
  width: 120px;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  margin: 0 3px;
`;

export const HeroImage = styled.Image`
  height: 60px;
  width: 60px;
`;

export const HeroName = styled.Text`
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Marvel-Regular';
  letter-spacing: 1px;
  margin-top: 3px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #fff;
  margin: 5px 0 10px 20px;
  font-family: 'Marvel-Regular';
  text-transform: uppercase;
`;

export const TabContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingLeft: 15, paddingRight: 20},
})``;

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
  background: white;
  border-radius: 10px;
  margin: 0 3px;
`;

export const HeroImage = styled.Image`
  height: 60px;
  width: 60px;
`;

export const HeroName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin: 0 0 10px 15px;
`;

export const TabContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
})``;

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  /* background: rgba(255, 0, 0, 0.85); */
  background: #504a4a;
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
  /* background: rgba(255, 0, 0, 0.85); */
  background: #504a4a;
`;

export const HeroContainer = styled.View`
  padding: 15px 10px;
  flex-direction: row;
  align-self: center;
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
  margin: 10px 0 0 15px;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #504a4a;
`;

export const Header = styled.View`
  display: flex;
  /* background-color: rgba(0, 0, 0, 0.76); */
  background-color: rgba(255, 0, 0, 0.85);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10;
  padding-right: 10;
  height: 50;
`;

export const HeroContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
`;

export const HeroImage = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 10px;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  text-align: justify;
  color: #333;
`;

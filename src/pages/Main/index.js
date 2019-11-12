import React from 'react';
import {Alert} from 'react-native';
import {
  Container,
  Header,
  HeaderImage,
  ImageHeader,
  Content,
  HeroContainer,
  Item,
  HeroImage,
  Title,
  HeroName,
} from './styles';

import logo from '~/assets/Logo.png';
import bg from '~/assets/bg.png';
import ironman from '~/assets/icons/ironman.png';
import hulk from '~/assets/icons/hulk.png';
import spiderman from '~/assets/icons/spiderman.png';

export default function Main({navigation}) {
  return (
    <Container>
      <Header>
        <HeaderImage source={bg}>
          <ImageHeader source={logo} />
        </HeaderImage>
      </Header>

      <Content>
        <Title>Top heroes</Title>
        <HeroContainer>
          <Item
            onPress={() =>
              navigation.navigate('HeroDetails', {name: 'Iron Man'})
            }>
            <HeroImage source={ironman} />
            <HeroName>Iron Man</HeroName>
          </Item>
          <Item
            onPress={() => navigation.navigate('HeroDetails', {name: 'Hulk'})}>
            <HeroImage source={hulk} />
            <HeroName>Hulk</HeroName>
          </Item>
          <Item
            onPress={() =>
              navigation.navigate('HeroDetails', {name: 'Spider-Man'})
            }>
            <HeroImage source={spiderman} />
            <HeroName>Spider Man</HeroName>
          </Item>
        </HeroContainer>
      </Content>
    </Container>
  );
}

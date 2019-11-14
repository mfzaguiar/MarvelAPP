import React from 'react';
import {
  Container,
  Header,
  HeaderImage,
  ImageHeader,
  Content,
  ButtonsContainer,
  StyledButton,
  StyledIcon,
  ButtonText,
} from './styles';

import TopHeroes from '~/components/TopHeroes';
import logo from '~/assets/Logo.png';
import bg from '~/assets/bg.png';

export default function Main({navigation}) {
  return (
    <Container>
      <Header>
        <HeaderImage source={bg}>
          <ImageHeader source={logo} />
        </HeaderImage>
      </Header>

      <Content>
        <TopHeroes navigation={navigation} />
        <ButtonsContainer>
          <StyledButton onPress={() => navigation.navigate('HeroSearch')}>
            <ButtonText>Search</ButtonText>
            <StyledIcon name="search" />
          </StyledButton>
        </ButtonsContainer>
      </Content>
    </Container>
  );
}

Main.navigationOptions = () => ({
  header: null,
});

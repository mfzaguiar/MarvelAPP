import React from 'react';
import {
  Container,
  Header,
  HeaderImage,
  ImageHeader,
  Content,
  ButtonsContainer,
  StyledButton,
  ButtonText,
  ButtonImage,
} from './styles';

import TopHeroes from '~/components/TopHeroes';
import logo from '~/assets/Logo.png';
import bg from '~/assets/bg.png';
import comic from '~/assets/icons/comic-book.png';
import avengers from '~/assets/icons/avengers.png';

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
            <ButtonText>Hero Search</ButtonText>
            <ButtonImage source={avengers} />
          </StyledButton>
          <StyledButton onPress={() => navigation.navigate('HeroSearch')}>
            <ButtonText>Comics Search </ButtonText>
            <ButtonImage source={comic} />
          </StyledButton>
        </ButtonsContainer>
      </Content>
    </Container>
  );
}

Main.navigationOptions = () => ({
  header: null,
});

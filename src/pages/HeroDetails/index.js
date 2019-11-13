import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderImage,
  HeroContainer,
  HeroImage,
  Name,
  Description,
  Animation,
} from './styles';

import api from '~/services/api';
import bg from '~/assets/bg.png';
import LoadingAnimation from '~/assets/animations/loader.json';

export default function HeroDetails({navigation}) {
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState();
  const heroName = navigation.getParam('name');

  useEffect(() => {
    async function loadHero() {
      const response = await api.get('characters', {
        params: {
          name: heroName,
        },
      });
      setHero(response.data.data.results[0]);
      setLoading(false);
    }
    loadHero();
  }, [heroName]);

  return (
    <Container>
      <Header>
        <HeaderImage source={bg}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Icon name="arrow-back" size={35} color="#fff" />
          </TouchableOpacity>
          <HeaderTitle>Detalhes</HeaderTitle>
        </HeaderImage>
      </Header>
      {loading ? (
        <Animation source={LoadingAnimation} autoPlay loop />
      ) : (
        <HeroContainer>
          <HeroImage
            source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}}
          />
          <Name>{hero.name}</Name>
          <Description>{hero.description}</Description>
        </HeroContainer>
      )}
    </Container>
  );
}

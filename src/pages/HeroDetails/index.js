import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  HeroContainer,
  HeroImage,
  Name,
  Description,
} from './styles';

import api from '~/services/api';
import LoadingAnimation from '~/assets/animations/loader.json';

export default function HeroDetails({navigation}) {
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState();
  const heroName = navigation.getParam('name');

  useEffect(() => {
    async function loadHero() {
      const response = await api.get('characters', {
        params: {
          apikey: '',
          hash: '',
          ts: 1573593206609,
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
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Icon name="arrow-back" size={28} style={{margin: 10}} color="#fff" />
        </TouchableOpacity>
      </Header>
      {loading ? (
        <Lottie source={LoadingAnimation} autoPlay loop />
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

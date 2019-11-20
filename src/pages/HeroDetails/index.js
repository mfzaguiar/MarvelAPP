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
  FooterLink,
  Link,
  LinkText,
} from './styles';

import api from '~/services/api';
import bg from '~/assets/bg.png';
import LoadingAnimation from '~/assets/animations/loader.json';

export default function HeroDetails({navigation}) {
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState();
  const heroName = navigation.getParam('name');
  const heroId = navigation.getParam('id');

  useEffect(() => {
    async function loadHero() {
      const response = await api.get('characters', {
        params: {
          name: heroName,
          id: heroId,
        },
      });
      setHero(response.data.data.results[0]);
      setLoading(false);
    }
    loadHero();
  }, [heroName, heroId]);

  return (
    <Container>
      <Header>
        <HeaderImage source={bg}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={35} color="#fff" />
          </TouchableOpacity>
          <HeaderTitle>Hero Details</HeaderTitle>
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
          <FooterLink>
            {hero.urls.map((item, index) => (
              <Link
                key={index}
                onPress={() =>
                  navigation.navigate('WebView', {
                    name: hero.name,
                    url: item.url,
                  })
                }>
                <LinkText>{item.type}</LinkText>
              </Link>
            ))}
          </FooterLink>
        </HeroContainer>
      )}
    </Container>
  );
}

HeroDetails.navigationOptions = () => ({
  header: null,
});

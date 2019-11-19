import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {parseISO, format} from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  SideContent,
  Header,
  HeaderTitle,
  HeaderImage,
  ComicContainer,
  ComicImage,
  ComicDescContainer,
  Title,
  Description,
  ComicTopic,
  ComicTopicDescription,
  ComicInfo,
  Animation,
} from './styles';

import api from '~/services/api';
import bg from '~/assets/bg.png';
import LoadingAnimation from '~/assets/animations/loader.json';

export default function HeroDetails({navigation}) {
  const [loading, setLoading] = useState(true);
  const [comic, setComic] = useState();
  const comidId = navigation.getParam('id');

  useEffect(() => {
    async function loadHero() {
      const response = await api.get('comics', {
        params: {
          id: comidId,
        },
      });
      setComic(response.data.data.results[0]);
      setLoading(false);
    }
    loadHero();
  }, [comidId]);

  return (
    <Container>
      <Header>
        <HeaderImage source={bg}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={35} color="#fff" />
          </TouchableOpacity>
          <HeaderTitle>Comic Details</HeaderTitle>
        </HeaderImage>
      </Header>
      {loading ? (
        <Animation source={LoadingAnimation} autoPlay loop />
      ) : (
        <ComicContainer>
          <ComicDescContainer>
            <ComicImage
              source={{
                uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
              }}
            />
            <SideContent>
              <Title>{comic.title}</Title>
              <ComicTopic>Published</ComicTopic>
              <ComicInfo>
                {format(parseISO(comic.dates[0].date), 'MMMM d, yyyy')}
              </ComicInfo>
              <ComicTopic>Writer</ComicTopic>
              <ComicInfo>
                {comic.creators.items.map(
                  item => item.role === 'writer' && item.name,
                )}
              </ComicInfo>
            </SideContent>
          </ComicDescContainer>

          <ComicTopicDescription>Description</ComicTopicDescription>
          <Description>{comic.description}</Description>
        </ComicContainer>
      )}
    </Container>
  );
}

HeroDetails.navigationOptions = () => ({
  header: null,
});

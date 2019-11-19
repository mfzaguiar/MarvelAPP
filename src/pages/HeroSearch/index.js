import React, {useState} from 'react';
import {FlatList, Keyboard, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Input from '~/components/Input';
import api from '~/services/api';
import bg from '~/assets/bg.png';
import empty from '~/assets/animations/empty.gif';
import LoadingAnimation from '~/assets/animations/loader.json';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderImage,
  Animation,
  Form,
  SubmitButton,
  HeroButton,
  HeroHeader,
  HeroName,
  HeroImage,
  GifContainer,
  ImageGif,
} from './styles';

export default function HeroSearch({navigation}) {
  const [loading, setLoading] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [search, setSearch] = useState('');
  const [heroes, setHeroes] = useState([]);

  const [offset, setOffSet] = useState(0);
  const [count, setCount] = useState(0);

  const loadingFooter = () => {
    if (!loadingList) return null;
    return <ActivityIndicator size="large" color="#fff" />;
  };

  async function loadHeros() {
    if (search.length >= 1) {
      setLoading(true);
      const response = await api.get('characters', {
        params: {
          nameStartsWith: search,
          limit: 10,
        },
      });
      setOffSet(0);
      setHeroes(response.data.data.results);
      setCount(response.data.data.count);
      setLoading(false);
      Keyboard.dismiss();
    }
  }

  const loadM = () => {
    if (scroll && count >= 10) {
      setOffSet(offset + 10);
      handleLoadMore(offset + 10);
    }
  };

  async function handleLoadMore(offset = 10) {
    setLoadingList(true);
    const response = await api.get('characters', {
      params: {
        nameStartsWith: search,
        limit: 10,
        offset,
      },
    });
    setHeroes([...heroes, ...response.data.data.results]);
    setCount(response.data.data.count);
    setLoadingList(false);
    setScroll(false);
  }

  return (
    <Container>
      <Header>
        <HeaderImage source={bg}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Icon name="arrow-back" size={32} color="#fff" />
          </TouchableOpacity>
          <HeaderTitle>Hero Search</HeaderTitle>
        </HeaderImage>
      </Header>
      <Form>
        <Input
          icon="clear"
          placeholder="Search your hero"
          autoCorrect={false}
          autoCapitalize="none"
          value={search}
          onChangeText={setSearch}
          returnKeyTupe="send"
          onSubmitEditing={loadHeros}
        />
        <SubmitButton onPress={loadHeros}>
          <Icon name="search" color="#fff" size={28} />
        </SubmitButton>
      </Form>

      {loading ? (
        <Animation source={LoadingAnimation} autoPlay loop />
      ) : (
        <>
          {heroes.length <= 0 ? (
            <GifContainer>
              <ImageGif source={empty} />
            </GifContainer>
          ) : (
            <FlatList
              onScroll={() => setScroll(true)}
              onRefresh={() => loadHeros()}
              refreshing={loading}
              onEndReached={() => loadM()}
              onEndReachedThreshold={0.1}
              ListFooterComponent={loadingFooter}
              scrollEventThrottle={50}
              numColumns={2}
              data={heroes}
              keyExtractor={hero => hero.id}
              renderItem={({item}) => (
                <HeroButton
                  onPress={() =>
                    navigation.navigate('HeroDetails', {id: item.id})
                  }>
                  <HeroImage
                    source={{
                      uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                    }}>
                    <HeroHeader>
                      <HeroName>{item.name}</HeroName>
                    </HeroHeader>
                  </HeroImage>
                </HeroButton>
              )}
            />
          )}
        </>
      )}
    </Container>
  );
}

HeroSearch.navigationOptions = () => ({
  header: null,
});

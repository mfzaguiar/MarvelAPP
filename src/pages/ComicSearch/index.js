import React, {useState} from 'react';
import {Keyboard, ActivityIndicator, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderImage,
  Form,
  SubmitButton,
  Animation,
  GifContainer,
  GifText,
  ImageGif,
  ComicButton,
  ComicHeader,
  ComicTitle,
} from './styles';

import api from '~/services/api';
import Input from '~/components/Input';
import ComicImage from '~/components/CImage';
import bg from '~/assets/bg.png';
import LoadingAnimation from '~/assets/animations/loader.json';
import empty from '~/assets/animations/groot.gif';

export default function ComicSearch({navigation}) {
  const [loading, setLoading] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [offset, setOffSet] = useState(0);
  const [count, setCount] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [comics, setComics] = useState([]);
  const [search, setSearch] = useState('');

  const loadingFooter = () => {
    if (!loadingList) return null;
    return <ActivityIndicator size="large" color="#fff" />;
  };

  async function loadComics() {
    if (search.length >= 1) {
      setLoading(true);
      const response = await api.get('comics', {
        params: {
          titleStartsWith: search,
          limit: 10,
        },
      });
      setOffSet(0);
      setComics(response.data.data.results);
      setCount(response.data.data.count);
      setLoading(false);
      Keyboard.dismiss();
    }
  }

  const loadM = () => {
    if (scroll && count >= 10 && !loadingList) {
      setOffSet(offset + 10);
      handleLoadMore(offset + 10);
    }
  };

  async function handleLoadMore(offset = 10) {
    setLoadingList(true);
    const response = await api.get('comics', {
      params: {
        titleStartsWith: search,
        limit: 10,
        offset,
      },
    });
    setComics([...comics, ...response.data.data.results]);
    setCount(response.data.data.count);
    setLoadingList(false);
    setScroll(false);
  }

  return (
    <Container>
      <Header>
        <HeaderImage source={bg}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={32} color="#fff" />
          </TouchableOpacity>
          <HeaderTitle>Comics Search</HeaderTitle>
        </HeaderImage>
      </Header>
      <Form>
        <Input
          icon="clear"
          placeholder="Search your comic"
          autoCorrect={false}
          autoCapitalize="none"
          value={search}
          onChangeText={setSearch}
          returnKeyTupe="send"
          onSubmitEditing={loadComics}
        />
        <SubmitButton onPress={loadComics}>
          <Icon name="search" color="#fff" size={28} />
        </SubmitButton>
      </Form>

      {loading ? (
        <Animation source={LoadingAnimation} autoPlay loop />
      ) : (
        <>
          {comics.length <= 0 ? (
            <GifContainer>
              <GifText>NO DATA ...</GifText>
              <ImageGif source={empty} />
            </GifContainer>
          ) : (
            <FlatList
              onScroll={() => setScroll(true)}
              onRefresh={() => loadComics()}
              refreshing={loading}
              onEndReached={() => loadM()}
              onEndReachedThreshold={0.1}
              ListFooterComponent={loadingFooter}
              scrollEventThrottle={50}
              numColumns={2}
              data={comics}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <ComicButton
                  onPress={() =>
                    navigation.navigate('ComicDetails', {id: item.id})
                  }>
                  <ComicImage
                    source={{
                      uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                    }}>
                    <ComicHeader>
                      <ComicTitle>{item.title}</ComicTitle>
                    </ComicHeader>
                  </ComicImage>
                </ComicButton>
              )}
            />
          )}
        </>
      )}
    </Container>
  );
}

ComicSearch.navigationOptions = () => ({
  header: null,
});

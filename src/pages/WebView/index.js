import React from 'react';

import {Browser} from './styles';

export default function WebView({navigation}) {
  const url = navigation.getParam('url');

  return <Browser source={{uri: url}} />;
}

WebView.navigationOptions = ({navigation}) => {
  return {
    title: navigation.getParam('name'),
  };
};

import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar backgroundColor="rgba(0,0,0,0.9)" barStyle="light-content" />
    <Routes />
  </>
);

export default App;

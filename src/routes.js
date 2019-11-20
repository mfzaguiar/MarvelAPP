import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';
import HeroDetails from '~/pages/HeroDetails';
import HeroSearch from '~/pages/HeroSearch';
import ComicSearch from '~/pages/ComicSearch';
import ComicDetails from '~/pages/ComicDetails';
import WebView from '~/pages/WebView';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    HeroDetails,
    HeroSearch,
    ComicSearch,
    ComicDetails,
    WebView,
  }),
);

export default Routes;

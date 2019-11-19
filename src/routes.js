import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';
import HeroDetails from '~/pages/HeroDetails';
import HeroSearch from '~/pages/HeroSearch';
import ComicSearch from '~/pages/ComicSearch';

const Routes = createAppContainer(
  createStackNavigator({Main, HeroDetails, HeroSearch, ComicSearch}),
);

export default Routes;

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';
import HeroDetails from '~/pages/HeroDetails';
import HeroSearch from '~/pages/HeroSearch';

const Routes = createAppContainer(
  createStackNavigator({Main, HeroDetails, HeroSearch}),
);

export default Routes;

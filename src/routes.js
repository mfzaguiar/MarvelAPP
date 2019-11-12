import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import HeroDetails from '~/pages/HeroDetails';

const Routes = createAppContainer(createSwitchNavigator({Main, HeroDetails}));

export default Routes;

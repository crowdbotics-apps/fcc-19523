import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList89966Navigator from '../features/ArticleList89966/navigator';
import Maps89953Navigator from '../features/Maps89953/navigator';
import ArticleList89948Navigator from '../features/ArticleList89948/navigator';
import Maps89935Navigator from '../features/Maps89935/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList89966: { screen: ArticleList89966Navigator },
Maps89953: { screen: Maps89953Navigator },
ArticleList89948: { screen: ArticleList89948Navigator },
Maps89935: { screen: Maps89935Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

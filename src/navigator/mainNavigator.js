import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile188100Navigator from '../features/UserProfile188100/navigator';
import Tutorial188099Navigator from '../features/Tutorial188099/navigator';
import NotificationList188071Navigator from '../features/NotificationList188071/navigator';
import Settings188070Navigator from '../features/Settings188070/navigator';
import Settings188062Navigator from '../features/Settings188062/navigator';
import UserProfile188060Navigator from '../features/UserProfile188060/navigator';
import SignIn21188038Navigator from '../features/SignIn21188038/navigator';
import CalendarView2188037Navigator from '../features/CalendarView2188037/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile188100: { screen: UserProfile188100Navigator },
Tutorial188099: { screen: Tutorial188099Navigator },
NotificationList188071: { screen: NotificationList188071Navigator },
Settings188070: { screen: Settings188070Navigator },
Settings188062: { screen: Settings188062Navigator },
UserProfile188060: { screen: UserProfile188060Navigator },
SignIn21188038: { screen: SignIn21188038Navigator },
CalendarView2188037: { screen: CalendarView2188037Navigator },

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

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const store = configureStore();

//Register Screens
Navigation.registerComponentWithRedux("gT.HomeScreen", () => HomeScreen, Provider, store);

//Start App
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        id: "HomeScreen",
        name: 'gT.HomeScreen',
      }
    }
  });
});
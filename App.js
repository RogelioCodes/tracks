import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as LocationProvider } from './src/context/LocationContext';
import HomeScreen from './src/screens/HomeScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import PostScreen from './src/screens/PostScreen';
import SearchScreen from './src/screens/SearchScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    HomeFlow: createStackNavigator({
      //TrackList: TrackListScreen,
      Home: HomeScreen,
      TrackDetail: TrackDetailScreen,
      EditProfile: EditProfileScreen
      
    }),
   // Home: HomeScreen,
    
    //TrackCreate: TrackCreateScreen, comment back in
    //TrackList: TrackListScreen, comment back in
    
    Search: SearchScreen,
    Post: PostScreen,
    Notification: NotificationScreen,
    Account: AccountScreen,
    
  })
});

const App = createAppContainer(switchNavigator);


export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator) => { setNavigator(navigator) }}/>
      </AuthProvider>
    </LocationProvider>
  );
};


import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Auth from '../pages/auth/Auth';
import Home from '../pages/home/Index';

// export default (ableToAcess = false) => 

const StackNavigator =  createStackNavigator(
    {
      Auth,
      Home
    },
    {
      headerMode: 'none',
      initialRouteName: 'Auth',
    //   initialRouteName: ableToAcess ? 'Home' : 'Auth'
    },
  );
  
  const Routes = createAppContainer(StackNavigator);
  export default Routes;
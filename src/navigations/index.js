import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../pages/home.page';
import HomeDetailPage1 from '../pages/home-detail1.page';
import HomeDetailPage2 from '../pages/home-detail2.page';
import HomeDetailPage3 from '../pages/home-detail3.page';
import HomeDetailPage4 from '../pages/home-detail4.page';
import HomeDetailPage5 from '../pages/home-detail5.page';
import HomeDetailPage6 from '../pages/home-detail6.page';
import HomeDetailPage7 from '../pages/home-detail7.page';
import ProfilePage from '../pages/profile.page';
import SplashPage from '../pages/splash.page';

const Stack = createStackNavigator();
function Main() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail1"
        component={HomeDetailPage1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail2"
        component={HomeDetailPage2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail3"
        component={HomeDetailPage3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail4"
        component={HomeDetailPage4}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail5"
        component={HomeDetailPage5}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail6"
        component={HomeDetailPage6}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail7"
        component={HomeDetailPage7}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();
function Navigation(){
  return(
    <Drawer.Navigator>
        <Drawer.Screen
          name="Main"
          component={Main}
          options={{
            name: 'Home',
            headerTitle: 'Home',
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            headerTitle: 'Profile',
            headerShown: true,
          }}
        />
      </Drawer.Navigator>
  )
}

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Initial"
          component={Navigation}
          options={{
            headerShown: false,
          }}
        />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

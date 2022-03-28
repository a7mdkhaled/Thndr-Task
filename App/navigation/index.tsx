import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import ExploreScreen from '../containers/explore/explore.container';
import StockDetails from '../containers/stock-details/stock-details.container';
import Colors from '../constants/Colors';
import { RootStackParamList } from '../../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StockDetails"
        component={StockDetails}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.light.tint,
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

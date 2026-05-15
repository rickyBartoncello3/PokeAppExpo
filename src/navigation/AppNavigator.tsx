import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PokemonListScreen} from '@/src/screens/PokemonListScreen/PokemonListScreen';
import {PokemonDetailScreen} from '@/src/screens/PokemonDetailScreen/PokemonDetailScreen';
import {RootStackParamList, Routes} from './routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.PokemonList}
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name={Routes.PokemonList} component={PokemonListScreen} />
        <Stack.Screen name={Routes.PokemonDetail} component={PokemonDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

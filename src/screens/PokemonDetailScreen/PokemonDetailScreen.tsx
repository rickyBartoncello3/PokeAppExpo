import React from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList, Routes} from '@/src/navigation/routes';

type Props = NativeStackScreenProps<
    RootStackParamList,
    typeof Routes.PokemonDetail
>;

export const PokemonDetailScreen = ({route, navigation}: Props) => {
    return (
        <View>
            <Text>Pokemon Detail</Text>
            <Text>{route.params.pokemonName}</Text>

            <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
    );
};

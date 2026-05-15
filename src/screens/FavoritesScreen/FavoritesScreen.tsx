import React from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList, Routes} from '@/src/navigation/routes';

type Props = NativeStackScreenProps<
    RootStackParamList,
    typeof Routes.Favorites
>;

export const FavoritesScreen = ({navigation}: Props) => {
    return (
        <View>
            <Text>Favorites</Text>
            <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
    );
};

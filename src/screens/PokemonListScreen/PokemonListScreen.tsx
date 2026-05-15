import React from 'react';
import {Button, View} from 'react-native';

import {RootStackParamList, Routes} from '@/src/navigation/routes';
import Text from '@/src/components/Text/Text';
import {CustomView} from "@/src/components/CustomView/CustomView";
import styles from "./PokemonListScreen.styles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import {NavigationProp} from "@react-navigation/core";

export const PokemonListScreen = () => {
    const {navigate} = useNavigation<NavigationProp<RootStackParamList>>()
    const {top} = useSafeAreaInsets();
    return (
        <CustomView isScrolling={false} margin>
            <View style={[styles.root, {marginTop: top}]}></View>
            <Text size={12} weight={700}>Pokemon List</Text>

            <Button
                title="Go to Bulbasaur"
                onPress={() =>
                    navigate(Routes.PokemonDetail, {
                        pokemonName: 'bulbasaur',
                    })
                }
            />

            <Button
                title="Favorites"
                onPress={() => navigate(Routes.Favorites)}
            />
        </CustomView>
    );
};

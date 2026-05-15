import '@/src/Z_SRC/core/i18n/i18n';

import React, {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useFonts} from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import {PaperProvider} from 'react-native-paper';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {AppProviders} from '@/src/providers/AppProviders';
import {ThemeProvider} from '@/src/providers/ThemeProvider';
import {AppNavigator} from '@/src/navigation/AppNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [loaded, error] = useFonts({
        SpaceMono: require('@/src/Z_SRC/assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    useEffect(() => {
        if (error) {
            throw error;
        }
    }, [error]);

    useEffect(() => {
        const hideSplash = async () => {
            if (loaded) {
                await SplashScreen.hideAsync();
            }
        };

        hideSplash();
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <AppProviders>
                <ThemeProvider>
                    <PaperProvider>
                        <BottomSheetModalProvider>
                            <AppNavigator />
                        </BottomSheetModalProvider>
                    </PaperProvider>
                </ThemeProvider>
            </AppProviders>
        </GestureHandlerRootView>
    );
}

import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ErrorState} from './ErrorState';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {lightTheme} from '@/src/theme/theme';

jest.mock('@/src/components/CustomIcon/CustomIcon', () => ({
  CustomIcon: () => {
    const {Text} = require('react-native');
    return <Text>icon</Text>;
  },
}));

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <SafeAreaProvider
      initialMetrics={{
        frame: {
          x: 0,
          y: 0,
          width: 390,
          height: 844,
        },
        insets: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      <ThemeContext.Provider
        value={
          {
            currentTheme: lightTheme,
            colors: lightTheme.colors,
          } as any
        }
      >
        {ui}
      </ThemeContext.Provider>
    </SafeAreaProvider>,
  );
};

describe('ErrorState', () => {
  it('renders title and button text', () => {
    const {getByText} = renderWithProviders(
      <ErrorState
        text="Could not load Pokémon detail"
        buttonText="Come back to home"
        onActionPress={jest.fn()}
      />,
    );

    expect(getByText('Could not load Pokémon detail')).toBeTruthy();
    expect(getByText('Come back to home')).toBeTruthy();
  });

  it('calls action when pressed', () => {
    const onActionPress = jest.fn();

    const {getByText} = renderWithProviders(
      <ErrorState
        text="Could not load Pokémon detail"
        buttonText="Come back to home"
        onActionPress={onActionPress}
      />,
    );

    fireEvent.press(getByText('Come back to home'));

    expect(onActionPress).toHaveBeenCalledTimes(1);
  });
});

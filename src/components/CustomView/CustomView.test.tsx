import React from 'react';
import {Text as RNText} from 'react-native';
import {render} from '@testing-library/react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {CustomView} from './CustomView';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {lightTheme} from '@/src/theme/theme';

jest.mock('react-native-gesture-handler', () => {
  const React = require('react');
  const {ScrollView} = require('react-native');

  return {
    ScrollView: ({children, ...props}: any) => {
      return (
        <ScrollView testID="custom-scroll-view" {...props}>
          {children}
        </ScrollView>
      );
    },
  };
});

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
          top: 24,
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

describe('CustomView', () => {
  it('renders children', () => {
    const {getByText} = renderWithProviders(
      <CustomView>
        <RNText>Hello CustomView</RNText>
      </CustomView>,
    );

    expect(getByText('Hello CustomView')).toBeTruthy();
  });

  it('renders ScrollView when isScrolling is true', () => {
    const {getByTestId} = renderWithProviders(
      <CustomView isScrolling>
        <RNText>Scrollable content</RNText>
      </CustomView>,
    );

    expect(getByTestId('custom-scroll-view')).toBeTruthy();
  });

  it('does not render ScrollView when isScrolling is false', () => {
    const {queryByTestId, getByText} = renderWithProviders(
      <CustomView isScrolling={false}>
        <RNText>Static content</RNText>
      </CustomView>,
    );

    expect(getByText('Static content')).toBeTruthy();
    expect(queryByTestId('custom-scroll-view')).toBeNull();
  });
});

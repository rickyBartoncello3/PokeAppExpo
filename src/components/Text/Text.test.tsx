import React from 'react';
import {render} from '@testing-library/react-native';

import Text from './Text';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {lightTheme} from '@/src/theme/theme';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeContext.Provider
      value={
        {
          currentTheme: lightTheme,
          colors: lightTheme.colors,
        } as any
      }
    >
      {ui}
    </ThemeContext.Provider>,
  );
};

describe('Text', () => {
  it('renders children', () => {
    const {getByText} = renderWithTheme(
      <Text size={12} weight={200}>
        Hello world
      </Text>,
    );

    expect(getByText('Hello world')).toBeTruthy();
  });
});

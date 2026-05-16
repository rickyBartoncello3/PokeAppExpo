import React from 'react';
import {render} from '@testing-library/react-native';

import {Loading} from './Loading';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {lightTheme} from '@/src/theme/theme';

jest.mock('@/src/components/CustomIcon/CustomIcon', () => ({
  CustomIcon: ({name}: {name: string}) => {
    const {Text} = require('react-native');
    return <Text>{name}</Text>;
  },
}));

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

describe('Loading', () => {
  it('renders nothing when isLoading is false', () => {
    const {toJSON} = renderWithTheme(<Loading isLoading={false} />);

    expect(toJSON()).toBeNull();
  });

  it('renders loading icon when isLoading is true', () => {
    const {toJSON} = renderWithTheme(<Loading isLoading />);

    expect(toJSON()).toBeTruthy();
  });
});

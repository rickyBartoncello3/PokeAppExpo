import React from 'react';
import {render} from '@testing-library/react-native';

import {EmptyState} from './EmptyState';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {lightTheme} from '@/src/theme/theme';

jest.mock('@/src/components/CustomIcon/CustomIcon', () => ({
  CustomIcon: () => {
    const {Text} = require('react-native');
    return <Text>icon</Text>;
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
describe('EmptyState', () => {
  it('renders title and description', () => {
    const {getByText} = renderWithTheme(
      <EmptyState
        title="No favorites yet"
        description="Mark Pokémon as favorites and they will appear here."
      />,
    );

    expect(getByText('No favorites yet')).toBeTruthy();
    expect(
      getByText('Mark Pokémon as favorites and they will appear here.'),
    ).toBeTruthy();
  });
});

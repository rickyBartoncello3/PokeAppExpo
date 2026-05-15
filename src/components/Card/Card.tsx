import React, {use} from 'react';
import {createStyles} from './Card.styles';
import {Card as RNCard} from 'react-native-paper';
import {CardProps} from '@/src/components/Card/interfaces';
import {ThemeContext} from '@/src/providers/ThemeProvider';

export const Card = ({children, style}: CardProps) => {
  const {currentTheme} = use(ThemeContext);
  const styles = createStyles(currentTheme);

  return (
    <RNCard mode="contained" style={styles.card}>
      <RNCard.Content style={styles.content}>{children}</RNCard.Content>
    </RNCard>
  );
};

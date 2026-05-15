import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import Text from '@/src/components/Text/Text';
import {Card} from '@/src/components/Card/Card';
import {ICON_NAMES} from '@/src/constants/iconNames';
import {usePokemonDetailContext} from './PokemonDetail';
import {CustomIcon} from '@/src/components/CustomIcon/CustomIcon';

export const PokemonDetailMetrics = () => {
  const {t} = useTranslation();
  const {pokemon, theme, styles} = usePokemonDetailContext();
  const {colors} = theme;

  return (
    <Card>
      <View style={styles.metricsCard}>
        <View style={styles.metricItem}>
          <CustomIcon
            name={ICON_NAMES.SQUARE_ARROW_VERTICAL}
            color={colors.text}
            size={30}
          />
          <View>
            <Text size={16} weight={800} style={styles.metricLabel}>
              {t('pokemonDetail.height')}
            </Text>
            <Text size={18} weight={900}>
              {pokemon.height} m
            </Text>
          </View>
        </View>
        <View style={styles.metricDivider} />
        <View style={styles.metricItem}>
          <CustomIcon name={ICON_NAMES.WEIGHT_SCALE} color={colors.text} size={30} />
          <View>
            <Text size={16} weight={800} style={styles.metricLabel}>
              {t('pokemonDetail.weight')}
            </Text>
            <Text size={18} weight={900}>
              {pokemon.weight} kg
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

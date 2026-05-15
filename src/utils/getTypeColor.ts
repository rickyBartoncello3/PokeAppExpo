import {AppTheme} from '@/src/theme/theme';

export const getTypeColor = (type: string, colors: AppTheme['colors']) => {
  const normalizedType = type.toLowerCase();

  const typeColors: Record<string, {background: string; text: string}> = {
    grass: {
      background: colors.successSoft,
      text: colors.successText,
    },
    poison: {
      background: 'rgba(147, 51, 234, 0.16)',
      text: colors.chartPurple,
    },
    fire: {
      background: colors.dangerSoft,
      text: colors.dangerText,
    },
    water: {
      background: colors.infoSoft,
      text: colors.infoText,
    },
    electric: {
      background: colors.warningSoft,
      text: colors.warningText,
    },
    normal: {
      background: colors.chipBackground,
      text: colors.chipText,
    },
    ghost: {
      background: 'rgba(139, 92, 246, 0.16)',
      text: colors.chartPurple,
    },
    flying: {
      background: colors.infoSoft,
      text: colors.infoText,
    },
    bug: {
      background: colors.successSoft,
      text: colors.successText,
    },
    ground: {
      background: colors.warningSoft,
      text: colors.warningText,
    },
    rock: {
      background: colors.chipBackground,
      text: colors.chartGray,
    },
    psychic: {
      background: 'rgba(236, 72, 153, 0.16)',
      text: colors.chartPink,
    },
    ice: {
      background: colors.infoSoft,
      text: colors.infoText,
    },
    dragon: {
      background: 'rgba(99, 102, 241, 0.16)',
      text: colors.chartPurple,
    },
    fighting: {
      background: colors.dangerSoft,
      text: colors.dangerText,
    },
    fairy: {
      background: 'rgba(236, 72, 153, 0.16)',
      text: colors.chartPink,
    },
  };

  return (
    typeColors[normalizedType] ?? {
      background: colors.chipBackground,
      text: colors.chipText,
    }
  );
};

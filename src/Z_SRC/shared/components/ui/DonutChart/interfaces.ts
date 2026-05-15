import {CategoryItem} from '@/src/Z_SRC/features/dashboard/components/CategoryRow/interfaces.ts';

export interface DonutChartProps {
  categories: CategoryItem[];
  size?: number;
  strokeWidth?: number;
  centerLabel?: string;
  centerValue?: string;
  textColor: string;
  mutedTextColor: string;
  trackColor: string;
}

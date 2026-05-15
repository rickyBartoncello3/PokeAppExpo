import {ReactNode} from 'react';

export type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  actionLabel?: string;
  onActionPress?: () => void;
};

import { ReactNode } from 'react';
import { BaseSubtitleContainer } from './styles';

interface BaseSubtitleProps {
  children: ReactNode;
}
export const BaseSubtitle = ({ children }: BaseSubtitleProps) => {
  return <BaseSubtitleContainer>{children}</BaseSubtitleContainer>;
};

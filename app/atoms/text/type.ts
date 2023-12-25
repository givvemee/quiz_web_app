import { ComponentPropsWithoutRef } from 'react';
import { TextStyled } from './styles';

export interface TextProps extends ComponentPropsWithoutRef<typeof TextStyled> {
  children: React.ReactNode;
}

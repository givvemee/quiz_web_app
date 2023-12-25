import { ComponentPropsWithoutRef } from 'react';

import { AnswerStyled } from './styles';

export type AnswerProps = ComponentPropsWithoutRef<typeof AnswerStyled>;

export interface AnswerAdditionalProps extends AnswerProps {
  isClickable: boolean;
}

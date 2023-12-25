import { forwardRef, memo } from 'react';

import { AnswerStyled } from './styles';

import { Text } from '../text';
import { AnswerAdditionalProps } from './type';

export const Answer = memo(
  forwardRef<HTMLButtonElement, AnswerAdditionalProps>(
    ({ children, disabled, ...restProps }, ref) => {
      return (
        <AnswerStyled
          disabled={disabled}
          {...restProps}
          ref={ref}
          css={{ ...restProps.css }}
        >
          <Text>{children}</Text>
        </AnswerStyled>
      );
    }
  )
);

Answer.displayName = 'Answer';

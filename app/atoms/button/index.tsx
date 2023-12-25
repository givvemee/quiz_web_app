import { forwardRef, memo } from 'react';

import { ButtonStyled } from './styles';

import { Text } from '../text';
import { ButtonProps } from './type';

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, disabled, ...restProps }, ref) => {
      return (
        <ButtonStyled
          disabled={disabled}
          {...restProps}
          ref={ref}
          css={{ ...restProps.css }}
        >
          <Text>{children}</Text>
        </ButtonStyled>
      );
    }
  )
);

Button.displayName = 'Button';

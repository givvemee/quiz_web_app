import { forwardRef, memo } from 'react';

import { TextStyled } from './styles';
import { TextProps } from './type';

export const Text = memo(
  forwardRef<HTMLParagraphElement, TextProps>(
    ({ children, ...restProps }, ref) => {
      return (
        <TextStyled {...restProps} ref={ref} css={{ ...restProps.css }}>
          {children}
        </TextStyled>
      );
    }
  )
);

Text.displayName = 'Text';

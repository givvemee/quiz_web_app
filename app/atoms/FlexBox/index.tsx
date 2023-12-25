import { forwardRef, memo } from 'react';

import { FlexBoxStyled } from './styles';
import { FlexBoxProps } from './type';

export const FlexBox = memo(
  forwardRef<HTMLParagraphElement, FlexBoxProps>(
    ({ children, ...restProps }, ref) => {
      return (
        <FlexBoxStyled {...restProps} ref={ref} css={{ ...restProps.css }}>
          {children}
        </FlexBoxStyled>
      );
    }
  )
);

FlexBox.displayName = 'FlexBox';

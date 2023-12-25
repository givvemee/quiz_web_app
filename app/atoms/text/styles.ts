import { styled } from '@/styles/stitches.config';
import * as stitches from '@stitches/react';

export const TextStyled = styled('p', {
  display: 'block',

  variants: {
    type: {
      title: {
        fontSize: '24px',
      },
      main: {
        fontSize: '18px',
      },
      sub: {
        fontSize: '16px',
      },
      body2: {
        fontSize: '14px',
      },
      body1: {
        fontSize: '12px',
      },
    },

    isBold: {
      true: {
        fontWeight: '500 !important',
      },
    },

    align: {
      center: {
        textAlign: 'center',
      },
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
    },
  },
});

export type TextAtomsProps = stitches.VariantProps<typeof TextStyled>;

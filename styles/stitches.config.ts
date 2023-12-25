import { createStitches } from '@stitches/react';

export const { styled, getCssText, keyframes } = createStitches({
  theme: {
    colors: {
      primary: '#8A98F1',
      subPrimary: '#279CF9',
      white: '#FFFFFF',
      black: '#000000',
      gray333: '#333333',
      grayCCC: '#CCCCCC',
      grayEEE: '#EEEEEE',
    },
  },

  media: {
    mobile: `(max-width: 767px)`,
    pc: `(min-width: 768px)`,
  },
});

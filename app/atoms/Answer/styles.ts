import { styled } from '@/styles/stitches.config';

export const AnswerStyled = styled('button', {
  width: '40%',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  borderRadius: '5px',
  color: '$black',
  cursor: 'pointer',
  boxSizing: 'border-box',
  fontSize: '14px',
  fontWeight: 'bold',
  border: '1px solid #CCC',

  variants: {
    isCorrect: {
      true: {
        border: '1px solid #8A98F1',
      },
      false: {
        border: '1px solid red',
      },
      unselected: {
        border: '1px solid #CCC',
      },
    },
  },
});
import { styled } from '@/styles/stitches.config';

export const ButtonStyled = styled('button', {
  width: '120px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  border: 'unset',
  backgroundColor: '$primary',
  borderRadius: '20px',
  color: '$white',
  cursor: 'pointer',
  boxSizing: 'border-box',
  fontSize: '14px',
  fontWeight: 'bold',

  '&[disabled]': {
    backgroundColor: '$gray666',
    border: '1px solid $gray666',
    cursor: 'not-allowed',
  },
});

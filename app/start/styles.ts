import { styled } from '@/styles/stitches.config';
import { FlexBox } from '../atoms/FlexBox';

export const Container = styled(FlexBox, {
  flexDirection: 'column',
  minWidth: '1440px',
  maxWidth: '1440px',
  minHeight: '900px',
  borderRadius: '30px',
  padding: '60px 100px',
  background: '$white',
  position: 'relative',
});

export const TextBox = styled('div', {
  padding: '30px 0',
});

export const ButtonBox = styled('div', {
  marginTop: '50px',
});

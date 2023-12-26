import { styled } from '@/styles/stitches.config';

export const LoaderBox = styled('div', {
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: 'rgba(0, 0, 0, .4)',
});

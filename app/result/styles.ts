import { keyframes, styled } from '@/styles/stitches.config';
import { Text } from '../atoms/text';

export const slideIn = keyframes({
  from: { transform: 'translateX(100%)' },
  to: { transform: 'translateX(0)' },
});

export const slideOut = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(100%)' },
});

export const ResultContainer = styled('div', {
  width: '100%',
  position: 'relative',

  '&.flex': {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
});

export const InfoContainer = styled('div', {
  textAlign: 'center',
  flex: 1,

  '&.slideOut': {
    maxWidth: '50%',
  },
});

export const SlideContainer = styled('div', {
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  transform: 'translateX(100%)',
  animation: `${slideIn} 0.3s ease-in-out forwards`,
  width: '50%',
  maxHeight: '900px',
  display: 'flex',
});

export const TotalTime = styled(Text, {
  margin: '20px 0',

  '>span': {
    color: '$primary',
  },
});

export const ButtonWrapper = styled('div', {
  margin: '20px 0',
  display: 'flex',
  justifyContent: 'center',
});

export const ChartBox = styled('div', {
  width: '300px',
  height: '300px',
  margin: '0 auto',
  zIndex: 1000,
});

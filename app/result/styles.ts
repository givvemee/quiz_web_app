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
  display: 'flex',
  width: '100%',
  position: 'relative',
});

export const InfoContainer = styled('div', {
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  transform: 'translateX(0)',
  animation: `${slideOut} 0.3s ease-in-out forwards`,
});

export const SlideContainer = styled('div', {
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  transform: 'translateX(100%)',
  animation: `${slideIn} 0.3s ease-in-out forwards`,
  width: '50%',
  position: 'absolute',
  top: '0',
  right: '0',
});

export const TotalTime = styled(Text, {
  margin: '20px 0',

  '>span': {
    color: '$primary',
  },
});

export const ButtonWrapper = styled('div', {
  margin: '20px 0',
});

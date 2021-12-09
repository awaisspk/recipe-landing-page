import {styled, css} from '@stitches';

const text = css({
  color: '$gray12',
  variants: {
    size: {
      1: {fontSize: '$1'},
      2: {fontSize: '$2'},
      3: {fontSize: '$3'},
      4: {fontSize: '$4'},
      5: {fontSize: '$5'},
      6: {fontSize: '$6'},
      7: {fontSize: '$7'},
      8: {fontSize: '$8'},
      9: {fontSize: '$9'},
    },
  },
});

export const Text = styled('span', text);
export const Paragraph = styled('p', text, {
  color: '#4f4f4f',
  fontSize: '1.1rem',
  lineHeight: '$5',
  width: 'min(60ch,100%)',

  variants: {
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
  },
});

export const ListItem = styled('li', Paragraph, {
  counterIncrement: 'inst',
  position: 'relative',
  pl: '40px',

  '&:before': {
    content: 'counter(inst)',
    size: '2.35em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(242, 153, 74, 1)',
    color: '#fff',
    fontSize: '1rem',
    borderRadius: '$lg',
    textAlign: 'center',
    position: 'absolute',
    left: -20,
  },
});

export const Strong = styled('strong', text, {fontWeight: '$2'});
export const H2 = styled('h2', text, {
  fontSize: 'clamp(1rem, 1vw + 1rem, 1.5rem)',
});

export const Title = styled('h1', {
  fontWeight: '$700',
  fontSize: 'clamp(2rem, 3vw + 1rem, 3rem)',
  lineHeight: '1.25',

  variants: {
    size: {
      2: {
        fontSize: 'clamp(1.625rem, 2vw + 1rem, 2.25rem)',
      },
    },
  },
});

import {Flex} from '@components/Flex';
import {Paragraph} from '@components/Typography';
import {styled} from '@stitches';

const StyledFooter = styled('footer', Flex, {
  pt: '50px',
  pb: '30px',
  justifySelf: 'center',
});

export const Footer = () => {
  return (
    <StyledFooter>
      <Paragraph
        css={{
          color: 'rgba(169, 169, 169, 1)',
          fontSize: 'clamp(0.8rem, 2vw + 0.1rem, 1rem)',
          '& a': {
            color: 'inherit',
            textDecoration: 'underline',
            fontWeight: '$700',
          },
        }}
      >
        created by{' '}
        <a
          href="https://devchallenges.io/portfolio/awaisspk"
          target="_blank"
          rel="noreferrer"
        >
          awaisspk
        </a>{' '}
        - devChallenges.io
      </Paragraph>
    </StyledFooter>
  );
};

import {Flex} from '@components/Flex';
import {styled} from '@stitches';

const Dot = styled('span', {
  size: 5,
  backgroundColor: 'rgba(196, 196, 196, 1)',
  borderRadius: '$full',
});

export const Dots = () => {
  return (
    <Flex
      flow="row"
      wrap="wrap"
      cross="center"
      css={{
        pt: '6px', // to align it to paragraph
        maxW: '30px',
        height: '20px',
        gap: '4px',
      }}
    >
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </Flex>
  );
};

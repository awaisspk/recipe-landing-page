import {Flex} from '@components/Flex';
import {Paragraph, Title} from '@components/Typography';
import {styled} from '@stitches';
import {Dots} from './Dots';

const Section = styled('section', Flex, {
  width: 'min(700px , 100%)',
});

export const PostTitle = () => {
  return (
    <Section flow="col" gap="3">
      <Title>Classic cheesecake Recipe</Title>
      <Flex flow="row" cross="start">
        <Dots />
        <Paragraph italic>
          Look no further for creamy and ultra smooth classic cheesecake recipe!
          Paired with buttery graham cracker crust, no one can deny its simple
          decadence. For the best results, bake in a water bath.
        </Paragraph>
      </Flex>
    </Section>
  );
};

import {Checkbox} from '@components/Checkbox';
import {Flex} from '@components/Flex';
import {H2} from '@components/Typography';
import {styled} from '@stitches';
import parser from 'html-react-parser';

const data = [
  '1 and 1/2 cups (150g) <Strong>graham cracker crumbs </Strong>(about 10 full sheet graham cracker)',
  '5 tablespoon (70g) <Strong>unsalted butter<Strong/>, melted',
  '1/4 cup (50g) <Strong>granulated sugar</Strong>',
];

const Section = styled('section', Flex, {});

export const CrackerRecipe = () => {
  return (
    <Section flow="col" gap="6">
      <H2>Graham Cracker Crust</H2>
      <Flex flow="col" gap="2">
        {data.map((d, i) => (
          <Checkbox id={`cracker-${i}`} key={i}>
            {parser(d)}
          </Checkbox>
        ))}
      </Flex>
    </Section>
  );
};

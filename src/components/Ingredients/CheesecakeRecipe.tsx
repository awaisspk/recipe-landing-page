import {Checkbox} from '@components/Checkbox';
import {Flex} from '@components/Flex';
import {H2} from '@components/Typography';
import {styled} from '@stitches';
import parser from 'html-react-parser';

const data = [
  'four 8-ounce blocks (904g) full-fat<Strong> cream cheese</Strong>, softened to room temperature',
  '1 cup (200g) <Strong>granulated sugar</Strong>',
  'O 1 cup (240g) full-fat <Strong>sour cream</Strong>, at room temperature',
  '1 teaspoon <Strong>pure vanilla extract</Strong>',
  '2 teaspoons <Strong>fresh lemon juice </Strong>(optional, but recommended)',
  '3 large <Strong>eggs</Strong>, at room temperature',
  'topping suggestions: <em>salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce </em>(recipe in notes) ',
];

const Section = styled('section', Flex, {});

export const CheesecakeRecipe = () => {
  return (
    <Section flow="col" gap="6">
      <H2>CheeseCake</H2>
      <Flex flow="col" gap="2">
        {data.map((d, i) => (
          <Checkbox id={`cheese-${i}`} key={i}>
            {parser(d)}
          </Checkbox>
        ))}
      </Flex>
    </Section>
  );
};

import {CheesecakeRecipe} from './CheesecakeRecipe';
import {CrackerRecipe} from './CrackerRecipe';
import {Flex} from '@components/Flex';
import {Title} from '@components/Typography';

export const Ingredients = () => {
  return (
    <Flex as="section" flow="col" gap="7">
      <Title size="2">Ingredients</Title>
      <CrackerRecipe />
      <CheesecakeRecipe />
    </Flex>
  );
};

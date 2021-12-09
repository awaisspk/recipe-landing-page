import {Flex} from '@components/Flex';
import {Paragraph} from '@components/Typography';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {styled} from '@stitches';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: 'white',
  minW: 25,
  height: 25,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #cdd1d5',
});

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Label = styled('label', Paragraph, {
  width: 'min(60ch,100%)',
});

type Props = {
  id: string;
};

export const Checkbox: React.FC<Props> = (props) => {
  return (
    <Flex gap="5">
      <StyledCheckbox id={props.id}>
        <CheckboxIndicator>
          <Tick />
        </CheckboxIndicator>
      </StyledCheckbox>
      <Label htmlFor={props.id}>{props.children}</Label>
    </Flex>
  );
};

const Tick = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke="#0c141e"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};

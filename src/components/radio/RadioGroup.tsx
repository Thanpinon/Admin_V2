import { Children, cloneElement, FC, ReactElement } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { RadioProps } from "./index";

// styled component
const StyledRadioGroup = styled.fieldset<HTMLFieldSetElement | SpaceProps>`
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  ${space}
`;

export interface RadioGroupProps extends SpaceProps {
  children: ReactElement<RadioProps>[];
  name: string;
  value?: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: FC<RadioGroupProps> = ({ name, value, children, onChange, ...props }: any) => {
  return (
    <StyledRadioGroup {...props}>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          name,
          onChange,
          id: index,
          checked: value ? child.props.value === value : undefined,
        });
      })}
    </StyledRadioGroup>
  );
};

export default RadioGroup;

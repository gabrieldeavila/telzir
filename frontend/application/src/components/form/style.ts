import styled from "styled-components/macro";
import { black, white } from "../../assets/base/colors";
import { BoxShadow, Flex, FormSettings } from "./../../assets/base/mixins";
import { ButtonProps, LabelProps, SelectProps } from "./interface";

export const FormWrapper = styled.form`
  ${Flex};
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  ${FormSettings};
`;

export const Select = styled.select<SelectProps>`
  ${BoxShadow};
  ${FormSettings};
  height: calc(30px + 2rem);
  width: 100%;
  font-size-adjust: 0.3;
`;

export const Option = styled.option``;

export const InputLabel = styled.label<LabelProps>`
  color: ${black};
  font-weight: 500;
  font-size: 15px;
  position: absolute;
  background: ${white};
  pointer-events: none;
  padding: 0 1rem;
  top: calc((30px + 1rem) / 2);
  transition: 0.2s ease all;

  ${(props) =>
    !props.avoidLabelFocus &&
    `
    ${Input}:focus ~ &,
    ${Select}:focus ~ & {
      top: -5px;
      font-size: 14px;
    }`}

  ${(props) =>
    props.show &&
    ` top: -5px;
    font-size: 14px;
    `}
`;

export const Button = styled.button<ButtonProps>`
  border-radius: 3px;
  border: none;
  background: ${black};
  color: ${white};
  font-weight: 600;
  font-size: 16px;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  transition: 0.2s ease all;

  &:hover {
    opacity: 0.8;
  }
`;

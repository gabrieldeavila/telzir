import { css } from "styled-components";
import { white } from "./colors";

// mixin with box shadow that can be used in various components
export const BoxShadow = css`
  box-shadow: 0px 0.5px 4px rgba(0, 0, 0, 0.25);
`;

//default flex
export const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//Settings to create the default container
export const ContainerSettings = css`
  ${BoxShadow};
  overflow: hidden;
  border-radius: 3px;
`;

// scrollbar default settings
export const Scrollbar = css`
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #c4c8ca;
  }
  &::-webkit-scrollbar-thumb {
    background: #7f7f83;
  }
`;

//default text
export const Text = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormSettings = css`
  ${BoxShadow};
  font-size: 18px;
  height: 30px;
  padding: 1rem;
  display: block;
  width: calc(100% - 2rem);
  border-radius: 5px;
  background: ${white};
  border: none;

  &:focus {
    outline: none;
  }
`;

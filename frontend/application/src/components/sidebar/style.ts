import styled from "styled-components/macro";
import { black, white } from "../../assets/base/colors";
import { Flex, Scrollbar } from "../../assets/base/mixins";
import { SidebarOptionsTextProps } from "./interface";
import { animated } from "react-spring";

export const SidebarWrapper = styled(animated.div)<any>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: ${black};
`;

export const SidebarContent = styled.div`
  ${Flex};
  flex-direction: column;
  align-items: unset;
  justify-content: space-between;
  padding: 1.5rem;
  height: calc(100% - 3rem);
`;

export const SidebarScroll = styled.div`
  ${Scrollbar};
  overflow: auto;
  height: fit-content;
`;

export const SidebarIconWrapper = styled.div`
  ${Flex};
  justify-content: flex-end;

  path {
    stroke: ${white};
  }
`;

export const SidebarOptions = styled.div`
  ${Flex};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  margin: 1rem 0;
`;

export const SidebarOptionsText = styled.h2<SidebarOptionsTextProps>`
  font-size: 1.2rem;
  color: ${white};
  font-weight: ${(props) => (props.small ? "400" : "600")};
`;

export const SidebarLine = styled.p`
  margin: 5rem 0;
  background: ${white};
  width: 30%;
  height: 0.1rem;
`;

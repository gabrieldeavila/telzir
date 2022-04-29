import styled from "styled-components/macro";
import { white } from "../../assets/base/colors";
import { BoxShadow, Flex } from "./../../assets/base/mixins";
import { NavOptionsInterface, NavWrapperInterface } from "./interface";

export const Nav = styled.nav`
  ${BoxShadow};
  position: fixed;
  width: 100%;
  background: ${white};
  height: 80px;
  z-index: 2;
`;

export const NavWrapper = styled.div<NavWrapperInterface>`
  ${Flex};
  justify-content: space-between;
  padding: ${({ isMobile }) => (isMobile ? "1rem" : "2rem 4rem")};
  height: -webkit-fill-available;
`;

export const NavDesktopWrapper = styled.div`
  ${Flex};
  gap: 2rem;
`;

export const NavOpt = styled.div<NavOptionsInterface>`
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
`;
//

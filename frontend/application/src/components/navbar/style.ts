import styled from "styled-components";
import { BoxShadow, Flex } from "./../../assets/base/mixins";

export const Nav = styled.nav`
  ${BoxShadow};
  height: 80px;
`;

export const NavWrapper = styled.div`
  ${Flex};
  justify-content: space-between;
  padding: 1rem;
  height: -webkit-fill-available;
`;

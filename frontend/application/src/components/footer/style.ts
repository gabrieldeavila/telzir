import styled from "styled-components/macro";
import { black, white } from "../../assets/base/colors";
import { ContainerSettings, Flex } from "../../assets/base/mixins";
import { CompanyProps, FooterMobileProps } from "./interface";

export const FooterWrapper = styled.div<FooterMobileProps>`
  ${ContainerSettings}
  ${Flex};
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  justify-content: ${(props) => (props.mobile ? "center" : "space-between")};
  align-items: flex-start;
  gap: 2rem;
  padding: ${(props) => (props.mobile ? "1.5rem" : "1.5rem 4rem")};
`;
//
export const Company = styled.div`
  ${Flex};
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const CompanyText = styled.div<CompanyProps>`
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  font-size: ${(props) => (!props.uppercase ? "0.8rem" : "1rem")};
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};
`;

export const Social = styled.div`
  ${Flex};
  gap: 1rem;
`;

export const SocialIcon = styled.button`
  background: ${black};
  color: ${white};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  ${Flex};
  cursor: pointer;

  svg {
    font-size: 1.2rem;
  }
`;

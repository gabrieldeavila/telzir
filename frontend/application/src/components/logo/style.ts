import styled from "styled-components/macro";
import { Flex } from "../../assets/base/mixins";
import { LogoProps, LogoOptions } from "./interface";

export const LogoName = styled.h1<LogoProps>`
  font-weight: 800;
  color: ${(props) => LogoOptions.type[props.type || "dark"].name};
  font-size: ${(props) => LogoOptions.size[props.size || "md"]};
`;

export const LogoDot = styled.span<LogoProps>`
  color: ${(props) => LogoOptions.type[props.type || "dark"].dot};
  font-size: ${(props) => LogoOptions.size[props.size || "md"]};
  font-weight: 800;
`;

export const LogoWrapper = styled.div<LogoProps>`
  ${Flex};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
`;

export const FormattedLogo = styled.div`
  ${Flex};
  justify-content: flex-start;
  gap: 0.25rem;
  text-align: justify;
  flex-wrap: wrap;
`;

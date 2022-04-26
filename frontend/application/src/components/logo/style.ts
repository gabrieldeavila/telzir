import styled from "styled-components";
import { Flex } from "../../assets/base/mixins";
import { LogoProps, LogoOptions } from "./interface";

export const LogoName = styled.h1<LogoProps>`
  font-weight: 800;
  color: ${(props: LogoProps) => LogoOptions.type[props.type || "dark"].name};
  font-size: ${(props: LogoProps) =>
    LogoOptions.size[props.size || "md"].mobile};
`;

export const LogoDot = styled.span`
  color: ${(props: LogoProps) => LogoOptions.type[props.type || "dark"].dot};
  font-size: ${(props: LogoProps) =>
    LogoOptions.size[props.size || "md"].mobile};
  font-weight: 800;
`;

export const LogoWrapper = styled.div`
  ${Flex};
`;

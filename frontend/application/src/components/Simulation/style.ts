import styled from "styled-components/macro";
import { BoxShadow, Flex } from "../../assets/base/mixins";
import Logo from "../logo";

export const SimulationWrapper = styled.div`
  ${Flex};
  justify-content: flex-start;
`;

export const ResultWrapper = styled.div`
  ${Flex};
  ${BoxShadow}
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 3px;
  margin-bottom: 2rem;
`;

export const ResultItem = styled.div`
  ${Flex};
  justify-content: space-between;
  width: 100%;
`;

export const ResultItemKey = styled.p`
  ${Flex};
  font-weight: 500;
  font-size: 12px;

  h1 {
    margin-left: 0.25rem;
  }
`;

export const ResultItemValue = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

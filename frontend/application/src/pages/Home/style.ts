import styled from "styled-components/macro";
import { black, grey, red } from "../../assets/base/colors";
import { ContainerSettings, Flex } from "./../../assets/base/mixins";
import { HomeMobileProps } from "./interfaces";

export const HomeWrapper = styled.div<HomeMobileProps>`
  padding: ${(props) => (props.mobile ? "1rem" : "4rem")};
  padding-top: 6rem;
`;

export const HomeSlogan = styled.div`
  ${ContainerSettings}
`;

export const HomeSloganImage = styled.img<HomeMobileProps>`
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: ${(props) => (props.mobile ? "auto" : "75vh")};
`;

export const HomeSloganText = styled.div<HomeMobileProps>`
  ${Flex};
  flex-wrap: wrap;
  padding: 1.5rem 0.5rem;
  gap: 0.5rem;
  user-select: none;

  div {
    font-size: ${(props) => (props.mobile ? "1rem" : "1.2rem")};
  }
`;

export const SloganTextDark = styled.div`
  color: ${black};
  ${Flex};
  flex-wrap: wrap;
  font-weight: 600;
  text-align: center;
`;

export const SloganTextRed = styled(SloganTextDark)`
  color: ${red};
  gap: 0.25rem;
`;

export const HomePlansWrapper = styled.div<HomeMobileProps>`
  ${Flex};
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const HomePlan = styled.div`
  ${ContainerSettings}
  ${Flex};
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1.5rem;
  width: calc(100% - 3rem);
`;

export const SectionTitle = styled.p`
  font-weight: 700;
  align-self: flex-start;
  margin: 0.5rem 0;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  margin-top: 3rem;
`;

export const PlanTitle = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const PlanDescription = styled.div`
  font-size: 0.75rem;
  width: 100%;
  padding-bottom: 0.75rem;
  border-bottom: 1.5px solid ${grey};
`;

export const PlanAdvantage = styled.div`
  ${Flex};
  gap: 0.5rem;
  font-size: 0.75rem;
`;

export const PlanBest = styled.div`
  font-size: 0.6rem;
  border: 2px solid ${red};
  color: ${red};
  font-weight: bold;
  border-radius: 5px;
  padding: 0.4rem;
`;

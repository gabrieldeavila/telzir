import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/global";
import Logo from "./../../components/logo/index";
import { useTranslation } from "react-i18next";
import {
  HomePlan,
  HomePlansWrapper,
  HomeSlogan,
  HomeSloganImage,
  HomeSloganText,
  HomeWrapper,
  PlanAdvantage,
  PlanBest,
  PlanDescription,
  PlanTitle,
  SectionTitle,
  SectionWarning,
  SloganTextDark,
  SloganTextRed,
} from "./style";
import { AdvantagesProps } from "./interfaces";
import { BsCheck2 } from "react-icons/bs";
import { allPlans } from "./helper";
import Simulation from "../../components/simulation";
import { useFormat } from "../../hooks/useFormat";

export default function Home() {
  const { state } = useContext(GlobalContext);

  return (
    <HomeWrapper mobile={state.isMobile}>
      <Slogan />
      <Plans />
      <Simulation />
    </HomeWrapper>
  );
}

const Slogan = () => {
  const { state } = useContext(GlobalContext);
  const { t } = useTranslation();

  return (
    <HomeSlogan>
      <HomeSloganImage mobile={state.isMobile} src="./img/person.jpeg" />
      <HomeSloganText mobile={state.isMobile}>
        <SloganTextDark>{t("evolution")}</SloganTextDark>
        <SloganTextRed>
          {t("choose")} <Logo type="red" />
        </SloganTextRed>
      </HomeSloganText>
    </HomeSlogan>
  );
};

// function to render the plans
const Plans = () => {
  const { t } = useTranslation();
  const { state } = useContext(GlobalContext);

  return (
    <>
      <SectionTitle>{t("home.plans")}</SectionTitle>
      <HomePlansWrapper mobile={state.isMobile}>
        {allPlans.map((plan, index) => (
          <HomePlan key={index}>
            {plan.best && <PlanBest>{t("home.best")}</PlanBest>}
            <PlanTitle>{t(`home.${plan.title}`)}</PlanTitle>
            <PlanDescription>{t(`home.${plan.description}`)}</PlanDescription>
            <Advantages advantages={plan.advantages} />
          </HomePlan>
        ))}
      </HomePlansWrapper>
      <SectionWarning>{t("home.warning")}</SectionWarning>
    </>
  );
};

// render the plans' advantages
const Advantages = ({ advantages }: AdvantagesProps) => {
  const { t } = useTranslation();
  const { formatTelzirLogo } = useFormat();

  return (
    <>
      {advantages.map((advantage, index) => {
        let advName = t(`home.advantages.${advantage}`);

        return (
          <PlanAdvantage key={index}>
            <BsCheck2 fontSize={20} />
            {formatTelzirLogo(advName)}
          </PlanAdvantage>
        );
      })}
    </>
  );
};

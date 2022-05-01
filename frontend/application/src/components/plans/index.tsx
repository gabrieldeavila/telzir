import { memo, useContext } from "react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../contexts/global";
import { useFormat } from "../../hooks/useFormat";
import { allPlans } from "../../pages/Home/helper";
import { AdvantagesProps } from "../../pages/Home/interfaces";
import {
  HomePlan,
  HomePlansWrapper,
  PlanAdvantage,
  PlanBest,
  PlanDescription,
  PlanTitle,
  SectionTitle,
  SectionWarning,
} from "../../pages/Home/style";
import { BsCheck2 } from "react-icons/bs";

// function to render the plans
function Plans() {
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
}

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

export default memo(Plans);

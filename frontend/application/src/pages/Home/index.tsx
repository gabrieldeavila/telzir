import React, { memo, useContext } from "react";
import { GlobalContext } from "../../contexts/global";
import Logo from "./../../components/logo/index";
import { useTranslation } from "react-i18next";
import {
  HomeSlogan,
  HomeSloganImage,
  HomeSloganText,
  HomeWrapper,
  SloganTextDark,
  SloganTextRed,
} from "./style";
import Simulation from "../../components/Simulation";
import Plans from "../../components/plans/index";

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

const Slogan = memo(() => {
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
});

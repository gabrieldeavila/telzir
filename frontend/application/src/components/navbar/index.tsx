import React, { useCallback, useContext } from "react";
import { Nav, NavDesktopWrapper, NavOpt, NavWrapper } from "./style";
import Logo from "../logo/index";
import { AiOutlineMenu } from "react-icons/ai";
import { GlobalContext } from "../../contexts/global";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { state } = useContext(GlobalContext);

  return (
    <Nav>
      <NavWrapper isMobile={state.isMobile}>
        <Logo />

        {state.isMobile ? <OptionsMobile /> : <OptionsDesktop />}
      </NavWrapper>
    </Nav>
  );
}

const OptionsMobile = () => {
  const { state, setState } = useContext(GlobalContext);

  // toggle the sidebar
  const openSidebar = useCallback(() => {
    setState({
      ...state,
      isSidebarOpen: true,
    });
  }, [state]);

  return <AiOutlineMenu onClick={openSidebar} size="25" />;
};

const OptionsDesktop = () => {
  const { changeLanguage } = useContext(GlobalContext);
  const { t, i18n } = useTranslation();

  return (
    <NavDesktopWrapper>
      <NavOpt>{t("navbar.simulation")}</NavOpt>
      <NavOpt>{t("navbar.support")}</NavOpt>
      <NavOpt onClick={changeLanguage} uppercase>
        {i18n.language}
      </NavOpt>
    </NavDesktopWrapper>
  );
};

import React, { useCallback, useContext } from "react";
import { Nav, NavAnchor, NavDesktopWrapper, NavOpt, NavWrapper } from "./style";
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
      <NavOpt>
        <NavAnchor href="#simulation">{t("simulation")}</NavAnchor>
      </NavOpt>
      <NavOpt>
        <NavAnchor
          href="https://api.whatsapp.com/send?phone=5554996122858"
          target="_blank"
        >
          {t("support")}
        </NavAnchor>
      </NavOpt>
      <NavOpt onClick={changeLanguage} uppercase>
        {i18n.language}
      </NavOpt>
    </NavDesktopWrapper>
  );
};

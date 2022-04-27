import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/global";
import {
  SidebarContent,
  SidebarIconWrapper,
  SidebarLine,
  SidebarOptions,
  SidebarOptionsText,
  SidebarWrapper,
} from "./style";
import { GrClose } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import Logo from "../logo";
import { useSpring } from "react-spring";

export default function Sidebar() {
  const { state, setState, changeLanguage } = useContext(GlobalContext);
  const { t } = useTranslation();
  const windowWidth = window.innerWidth;

  // toggle the sidebar
  const closeSidebar = () => {
    setState({
      ...state,
      isSidebarOpen: false,
    });
  };

  // animate the sidebar
  const styles = useSpring({
    loop: false,
    from: {
      translateX: state.isSidebarOpen ? windowWidth * 2 : 0,
      opacity: state.isSidebarOpen ? 0 : 1,
    },
    to: {
      translateX: state.isSidebarOpen ? 0 : windowWidth,
      opacity: state.isSidebarOpen ? 1 : 0,
    },
  });

  // avoid the sidebar to be open when the window is not smaller than 768px
  if (!state.isMobile) return null;

  return (
    <SidebarWrapper style={styles}>
      <SidebarContent>
        <div>
          <SidebarIconWrapper onClick={closeSidebar}>
            <GrClose size="25" />
          </SidebarIconWrapper>

          <SidebarOptions>
            <SidebarOptionsText onClick={changeLanguage}>
              {t("sidebar.language")}
            </SidebarOptionsText>
            <SidebarOptionsText>{t("sidebar.simulation")}</SidebarOptionsText>
          </SidebarOptions>

          <SidebarLine />

          <SidebarOptions>
            <SidebarOptionsText small>
              {t("sidebar.support")}
            </SidebarOptionsText>
          </SidebarOptions>
        </div>

        <Logo type="light" justify="flex-start" />
      </SidebarContent>
    </SidebarWrapper>
  );
}

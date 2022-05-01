import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/global";
import {
  SidebarAnchor,
  SidebarContent,
  SidebarIconWrapper,
  SidebarLine,
  SidebarOptions,
  SidebarOptionsText,
  SidebarScroll,
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
  const ref = React.useRef<HTMLDivElement>(null);

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
    immediate: !ref.current,
    from: {
      translateX: state.isSidebarOpen ? windowWidth * 2 : 0,
      opacity: state.isSidebarOpen ? 0 : 1,
    },
    to: {
      translateX: state.isSidebarOpen ? 0 : windowWidth,
      opacity: state.isSidebarOpen ? 1 : 0,
    },
  });

  // prevent sidebar from opening when window is not smaller than 768px
  if (!state.isMobile) return null;

  return (
    <SidebarWrapper ref={ref} style={styles}>
      <SidebarContent>
        <SidebarScroll>
          <SidebarIconWrapper onClick={closeSidebar}>
            <GrClose size="25" />
          </SidebarIconWrapper>

          <SidebarOptions>
            <SidebarOptionsText onClick={changeLanguage}>
              {t("language")}
            </SidebarOptionsText>
            <SidebarOptionsText>
              <SidebarAnchor onClick={closeSidebar} href="#simulation">
                {t("simulation")}
              </SidebarAnchor>
            </SidebarOptionsText>
          </SidebarOptions>

          <SidebarLine />

          <SidebarOptions>
            <SidebarOptionsText small>{t("support")}</SidebarOptionsText>
          </SidebarOptions>
        </SidebarScroll>

        <Logo type="light" justify="flex-start" />
      </SidebarContent>
    </SidebarWrapper>
  );
}

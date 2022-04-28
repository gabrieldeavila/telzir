import { useTranslation } from "react-i18next";
import Logo from "../logo";
import {
  Company,
  CompanyText,
  FooterWrapper,
  Social,
  SocialIcon,
} from "./style";
import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";
import { GlobalContext } from "../../contexts/global";
import { useContext } from "react";

export default function Footer() {
  const { t } = useTranslation();
  const { state } = useContext(GlobalContext);

  return (
    <FooterWrapper mobile={state.isMobile}>
      <Logo type="dark" />
      <Company>
        <CompanyText uppercase bold>
          {t("company")}
        </CompanyText>
        <CompanyText bold pointer>
          {t("support")}
        </CompanyText>
      </Company>
      <Social>
        <SocialIcon>
          <GrFacebookOption />
        </SocialIcon>
        <SocialIcon>
          <GrInstagram />
        </SocialIcon>
        <SocialIcon>
          <GrTwitter />
        </SocialIcon>
      </Social>
    </FooterWrapper>
  );
}

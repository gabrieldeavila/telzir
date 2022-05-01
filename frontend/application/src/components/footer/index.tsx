import { useTranslation } from "react-i18next";
import Logo from "../logo";
import {
  Company,
  CompanyText,
  FooterAnchor,
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
          <FooterAnchor
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5554996122858"
          >
            {t("support")}
          </FooterAnchor>
        </CompanyText>
      </Company>
      <Social>
        <SocialIcon href="https://www.facebook.com/" target="_blank">
          <GrFacebookOption />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/" target="_blank">
          <GrInstagram />
        </SocialIcon>
        <SocialIcon href="https://www.twitter.com/" target="_blank">
          <GrTwitter />
        </SocialIcon>
      </Social>
    </FooterWrapper>
  );
}

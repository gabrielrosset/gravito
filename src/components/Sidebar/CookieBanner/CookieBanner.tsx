import React from "react";
import { Link } from "gatsby";
import { useTheme } from "@/hooks";
import { COOKIES } from "@/constants";
import CookieConsent, { Cookies } from "react-cookie-consent";

import * as styles from "./CookieBanner.module.scss";

type Props = {
  googleAnalyticsId: string;
};

const CookieBanner = ({ googleAnalyticsId }: Props) => {
  const [{ mode }] = useTheme();
  return <CookieConsent
    enableDeclineButton
    onDecline={ () => { Decline(googleAnalyticsId) } }
    onAccept={ Accept }
    location="bottom"
    buttonText={ COOKIES.ACCEPT }
    ariaAcceptLabel={ COOKIES.ACCEPT_DESCRIPTION }
    declineButtonText={ COOKIES.DECLINE }
    ariaDeclineLabel={ COOKIES.DECLINE_DESCRIPTION }
    cookieName="GDPRCookieConsent"
    containerClasses={ mode == "dark" ? styles.bannerDark : styles.bannerLight }
    buttonClasses={ styles.buttons }
    declineButtonClasses={ styles.buttons }
    expires={150}
  >
    <span>{ COOKIES.BANNER + " " }</span>
    <Link to="/pages/privacy" className={styles.privacyLink} activeClassName={styles.active}>{COOKIES.LINK_TEXT}</Link>
  </CookieConsent>
};

const Decline = (googleAnalyticsId: string) => {
  console.log('Cookies declined: ', googleAnalyticsId);
  const disableAnalytics = `ga-disable-${googleAnalyticsId}`;
  // secure SSR
  if (window) {
    // @ts-ignore
    window[disableAnalytics] = true;
  }
  Cookies.remove("_ga");
  Cookies.remove(googleAnalyticsId.replace('G-', '_ga_'));
}

const Accept = () => {
  console.log("Cookies accepted");
}

export default CookieBanner;

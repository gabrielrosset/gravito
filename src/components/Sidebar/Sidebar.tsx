import React from "react";

import { useSiteMetadata } from "@/hooks";

import { Author } from "./Author";
import { Contacts } from "./Contacts";
import { Copyright } from "./Copyright";
import { CookieBanner } from "./CookieBanner";
import { Menu } from "./Menu";

import * as styles from "./Sidebar.module.scss";

type Props = {
  isIndex?: boolean;
};

const Sidebar = ({ isIndex }: Props) => {
  const { googleAnalyticsId, author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles.sidebar}>
      <div className={styles.inner}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
        <CookieBanner googleAnalyticsId={googleAnalyticsId} />
      </div>
    </div>
  );
};

export default Sidebar;

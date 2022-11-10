import React from "react";

import { Icon } from "@/components/Icon";
import { Image } from "@/components/Image";
import { getIcon } from "@/utils";

import * as styles from "./HeaderIn.module.scss";

type Props = {
  author: {
    name: string;
    bio: string;
    photo: string;
  };
};

const HeaderIn = ({ author }: Props) => {
  return (
    <header className={styles.author}>
      <div>
        <Image alt={author.name} path={author.photo} className={styles.photo} />
        <div className={styles.title}>
          <h2>{author.name}</h2>
          <span>Architecte solution</span>
        </div>
      </div>
      <div className={styles.scrollButton} onClick={scrollDown}>
        <Icon name="scrollDown" icon={getIcon("scrollDown")} />
      </div>
    </header>
  );
};

const scrollDown = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};

export default HeaderIn;

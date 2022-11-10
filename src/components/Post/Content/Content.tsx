import React from "react";

import { Image } from "@/components/Image";

import * as styles from "./Content.module.scss";

interface Props {
  title: string;
  body: string;
  image: string;
}

const Content: React.FC<Props> = ({ body, title, image }: Props) => {
  if (image != "") {
    const img = image.split('/').pop() as string;
    return (
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
          <div className={styles.logo}>
            <Image alt={title} path={img} className={styles.photo} />
          </div>
        <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    );
  } else {
    return (
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    );
  }
};

export default Content;

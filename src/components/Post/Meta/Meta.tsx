import React from "react";

import { useSiteMetadata } from "@/hooks";
import { POSTS } from "@/constants";

import * as styles from "./Meta.module.scss";

interface Props {
  date: string;
}

const Meta: React.FC<Props> = ({ date }: Props) => {
  const { defaultLanguage } = useSiteMetadata();
  return (
    <div className={styles.meta}>
      <p className={styles.date}>
        { POSTS.DATE_POST }
        {new Date(date).toLocaleDateString(navigator.language || defaultLanguage, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default Meta;

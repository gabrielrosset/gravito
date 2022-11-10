import React from "react";

import type { Symbol } from "@/types";
import { ICONS } from "@/constants";

import * as styles from "./Icon.module.scss";

interface Props {
  name: keyof typeof ICONS;
  icon: {
    viewBox: string;
    symbol: Symbol[];
    title?: string;
    link?: string;
  };
  height?: number;
}

const Icon: React.FC<Props> = ({ name, icon, height }: Props) => {
  const customStyles = (height) ? { width: "auto", height: height+"px" } : {};
  if (icon.link) {
    return (
      <a href={icon.link} className={styles.iconWrapper} target="_blank">
        <svg style={customStyles} className={styles.icon} viewBox={icon.viewBox}>
          <title>{icon.title || name}</title>
          { icon.symbol.map((s: Symbol) => (<path d={s.path} fill={s.fill} />)) }
        </svg>
      </a>
    );
  } else {
    return (
      <span className={styles.iconWrapper}>
        <svg style={customStyles} className={styles.icon} viewBox={icon.viewBox}>
          <title>{icon.title || name}</title>
          { icon.symbol.map((s: Symbol) => (<path d={s.path} fill={s.fill} />)) }
        </svg>
      </span>
    );
  }
};

export default Icon;

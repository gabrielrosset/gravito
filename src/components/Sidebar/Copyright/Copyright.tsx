import React from "react";
import packageJson from '../../../../package.json';

import * as styles from "./Copyright.module.scss";

type Props = {
  copyright: string;
};

const Copyright = ({ copyright }: Props) => {
  const buildId = `Version ${packageJson.version} - ${process.env.NODE_ENV}`;
  return <div title={ buildId } className={styles.copyright}>{copyright}</div>
};

export default Copyright;

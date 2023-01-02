import React from "react";

import { Icon } from "@/components/Icon";
import { getIcon } from "@/utils";
import { SKILLS } from "@/constants";

const SkillsBackend = () => {
  return (
    <>
      <h3>{SKILLS.BACKEND}</h3>
      <div>
        <Icon name="nodeJs" icon={getIcon("nodeJs")} height={48} />
        <Icon name="csharp" icon={getIcon("csharp")} height={48} />
        <Icon name="java" icon={getIcon("java")} height={48} />
        <Icon name="php" icon={getIcon("php")} height={48} />
        <Icon name="symfony" icon={getIcon("symfony")} height={48} />
        <Icon name="wordpress" icon={getIcon("wordpress")} height={48} />
        <Icon name="moodle" icon={getIcon("moodle")} height={48} />
        <Icon name="prestashop" icon={getIcon("prestashop")} height={48} />
      </div>
      <div>
        <Icon name="docker" icon={getIcon("docker")} height={48} />
        <Icon name="kubernetes" icon={getIcon("kubernetes")} height={48} />
        <Icon name="terraform" icon={getIcon("terraform")} height={48} />
        <Icon name="ansible" icon={getIcon("ansible")} height={48} />
        <Icon name="jenkins" icon={getIcon("jenkins")} height={48} />
        <Icon name="gcp" icon={getIcon("gcp")} height={48} />
        <Icon name="azure" icon={getIcon("azure")} height={48} />
        <Icon name="aws" icon={getIcon("aws")} height={48} />
      </div>
      <div>
        <Icon name="oauth" icon={getIcon("oauth")} height={48} />
        <Icon name="graphql" icon={getIcon("graphql")} height={48} />
        <Icon name="elasticsearch" icon={getIcon("elasticsearch")} height={48} />
        <Icon name="redis" icon={getIcon("redis")} height={48} />
        <Icon name="mongodb" icon={getIcon("mongodb")} height={48} />
        <Icon name="mysql" icon={getIcon("mysql")} height={48} />
        <Icon name="mariadb" icon={getIcon("mariadb")} height={48} />
        <Icon name="postgres" icon={getIcon("postgres")} height={48} />
      </div>
    </>
  );
};

export default SkillsBackend;

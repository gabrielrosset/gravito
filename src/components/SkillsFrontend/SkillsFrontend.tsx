import React from "react";

import { Icon } from "@/components/Icon";
import { getIcon } from "@/utils";
import { SKILLS } from "@/constants";

const SkillsFrontend = () => {
  return (
    <>
      <h3>{SKILLS.FRONTEND}</h3>
      <div>
        <Icon name="html5" icon={getIcon("html5")} height={48} />
        <Icon name="css3" icon={getIcon("css3")} height={48} />
        <Icon name="javascript" icon={getIcon("javascript")} height={48} />
        <Icon name="angular" icon={getIcon("angular")} height={48} />
        <Icon name="reactJs" icon={getIcon("reactJs")} height={48} />
        <Icon name="sass" icon={getIcon("sass")} height={48} />
        <Icon name="less" icon={getIcon("less")} height={48} />
        <Icon name="gulp" icon={getIcon("gulp")} height={48} />
        <Icon name="grunt" icon={getIcon("grunt")} height={48} />
      </div>
      <div>
        <Icon name="android" icon={getIcon("android")} height={48} />
        <Icon name="ios" icon={getIcon("ios")} height={48} />
        <Icon name="ionic" icon={getIcon("ionic")} height={48} />
        <Icon name="reactNative" icon={getIcon("reactNative")} height={48} />
        <Icon name="fastlane" icon={getIcon("fastlane")} height={48} />
        <Icon name="firebase" icon={getIcon("firebase")} height={48} />
        <Icon name="sentry" icon={getIcon("sentry")} height={48} />
        <Icon name="npm" icon={getIcon("npm")} height={48} />
      </div>
    </>
  );
};

export default SkillsFrontend;

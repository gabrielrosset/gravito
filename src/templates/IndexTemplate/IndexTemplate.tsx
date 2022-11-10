import React from "react";

import { graphql } from "gatsby";

import { HeaderIn } from "@/components/HeaderIn";
import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata } from "@/hooks";
import { Icon } from "@/components/Icon";
import { getIcon } from "@/utils";
import { Node } from "@/types";

interface Props {
  data: {
    markdownRemark: Node;
  };
}

const IndexTemplate: React.FC<Props> = ({ data }: Props) => {
  const { html: body } = data.markdownRemark;
  const { author } = useSiteMetadata();

  return (
    <Layout>
      <Sidebar isIndex />
      <Page>
        <HeaderIn author={author} />
        <h3>Mon parcours : </h3>
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <h3>Technologies web et mobile : </h3>
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
        <h3>Technologies serveur : </h3>
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
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        socialImage {
          publicURL
        }
      }
    }
  }
`;

export const Head: React.FC<Props> = () => {
  const { title, subtitle } = useSiteMetadata();
  const pageTitle = title;

  return <Meta title={pageTitle} description={subtitle} />;
};

export default IndexTemplate;

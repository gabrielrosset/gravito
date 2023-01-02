import React from "react";

import { graphql } from "gatsby";

import { HeaderIn } from "@/components/HeaderIn";
import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata } from "@/hooks";
import { Node } from "@/types";
import { SkillsBackend } from "@/components/SkillsBackend";
import { SkillsFrontend } from "@/components/SkillsFrontend";

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
        <h3>Mon parcours</h3>
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <SkillsFrontend></SkillsFrontend>
        <SkillsBackend></SkillsBackend>
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

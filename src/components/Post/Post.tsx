import React from "react";

import { Button } from "@/components/Button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import type { Node } from "@/types";

import { Author } from "./Author";
import { Comments } from "./Comments";
import { Content } from "./Content";
import { Meta } from "./Meta";
import { Tags } from "./Tags";
import { POSTS } from "@/constants";

import * as styles from "./Post.module.scss";

interface Props {
  post: Node;
}

const Post: React.FC<Props> = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date, socialImage } = post.frontmatter;
  const img = socialImage ? socialImage.publicURL : "";
  
  return (
    <div className={styles.post}>
      <div className={styles.buttons}>
        <Button className={styles.buttonArticles} title={POSTS.GO_BACK} to="/" />
        <ThemeSwitcher />
      </div>

      <div className={styles.content}>
        <Content body={html} title={title} image={img} />
      </div>

      <div className={styles.footer}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles.comments}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;

import React from "react";

import { Content } from "@/components/Post/Content";
import * as mocks from "@/mocks";
import { testUtils } from "@/utils";

describe("Content", () => {
  test("renders correctly", () => {
    const props = {
      title: mocks.markdownRemark.frontmatter.title,
      body: mocks.markdownRemark.html,
      image: mocks.markdownRemark.image,
    };

    const tree = testUtils
      .createSnapshotsRenderer(<Content {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

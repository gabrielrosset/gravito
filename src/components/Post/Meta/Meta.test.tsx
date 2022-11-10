import React from "react";

import { StaticQuery, useStaticQuery } from "gatsby";

import { Meta } from "@/components/Post/Meta";
import * as mocks from "@/mocks";
import { testUtils } from "@/utils";

const mockedStaticQuery = StaticQuery as jest.Mock;
const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("Meta", () => {
  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(({ render }) =>
      render(mocks.siteMetadata),
    );
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  test("renders correctly", () => {
    const props = {
      date: mocks.markdownRemark.frontmatter.date,
    };

    const tree = testUtils
      .createSnapshotsRenderer(<Meta {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";

import { StaticQuery, useStaticQuery } from "gatsby";

import { Feed } from "@/components/Feed";
import * as mocks from "@/mocks";
import { testUtils } from "@/utils";

const mockedStaticQuery = StaticQuery as jest.Mock;
const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("Feed", () => {
  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(({ render }) =>
      render(mocks.siteMetadata),
    );
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  test("renders correctly", () => {
    const props = { edges: mocks.edges };

    const tree = testUtils
      .createSnapshotsRenderer(<Feed {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

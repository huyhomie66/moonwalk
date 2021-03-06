import React from "react";

import TestRenderer from "../../helpers/testRenderer";
import ResultCard from "../ResultCard";

describe("ResultCard", () => {
  it("renders correctly", () => {
    const props = {
      data: {
        name: "$_TEST_NAME_$",
        net: "2020-08-05T02:00:00Z",
      },
      showDetails: jest.fn(),
    };
    const tree = TestRenderer(<ResultCard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

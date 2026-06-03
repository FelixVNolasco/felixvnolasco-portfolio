import "@testing-library/jest-dom";
import React from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    return React.createElement("img", props);
  },
}));

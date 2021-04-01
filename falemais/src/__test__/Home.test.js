import React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/Home/Home";

describe("componente Home", () => {
  it("render component Home", () => {
    const { getByText } = render(<Home />);
    const planoFalemais = getByText("Planos FaleMais 2021!");
    expect(getByText("Planos FaleMais 2021!")).toBeVisible();
  });
});

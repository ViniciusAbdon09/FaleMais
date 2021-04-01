import React from "react";
import { render } from "@testing-library/react";
import Tariff from "../pages/Tariff/Tariff";

describe("componente Tariff", () => {
  it("render component Tariff", () => {
    const { getByText } = render(<Tariff />);
    const calcTarifa = getByText("Calcule a Tarifa");
    expect(getByText("Calcule a Tarifa")).toBeVisible();
  });
});

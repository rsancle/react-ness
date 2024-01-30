import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Text from "../Text";

describe("Text component", () => {
  it("Text should render correctly", () => {
    render(
      <Text data-testid="text-component" tag="span">
        Hello world
      </Text>,
    );
    const text = screen.getByTestId("text-component");
    expect(text).toBeInTheDocument();
  });
});

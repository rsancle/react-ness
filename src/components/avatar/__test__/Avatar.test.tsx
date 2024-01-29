//Button/__test__/Button.test.tsx
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Avatar from "../Avatar";

describe("Avatar component", () => {
  it("Image should render correctly", () => {
    render(<Avatar src="" isRounded={false} />);
    const avatar = screen.getByRole("img");
    expect(avatar).toBeInTheDocument();
  });
});

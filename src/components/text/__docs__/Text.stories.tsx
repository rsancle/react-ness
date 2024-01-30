import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { Colors } from "../../../theme/colors";

const meta: Meta<typeof Example> = {
  title: "Text",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    children: Colors.NORMAL,
    tag: "span",
  },
};

export const Primary: Story = {
  args: {
    children: Colors.PRIMARY,
    tag: "span",
    color: Colors.PRIMARY,
  },
};

export const Success: Story = {
  args: {
    children: Colors.SUCCESS,
    tag: "span",
    color: Colors.SUCCESS,
  },
};

export const Warning: Story = {
  args: {
    children: Colors.WARNING,
    tag: "span",
    color: Colors.WARNING,
  },
};

export const Error: Story = {
  args: {
    children: Colors.ERROR,
    tag: "span",
    color: Colors.ERROR,
  },
};

export const Disabled: Story = {
  args: {
    children: Colors.DISABLED,
    tag: "span",
    color: Colors.DISABLED,
  },
};

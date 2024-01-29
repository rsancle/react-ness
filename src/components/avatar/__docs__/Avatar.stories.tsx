import type { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Avatar",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    src: faker.image.avatar(),
    size: "default",
  },
};
export const Rounded: Story = {
  args: {
    src: faker.image.avatar(),
    size: "default",
    rounded: true,
  },
};

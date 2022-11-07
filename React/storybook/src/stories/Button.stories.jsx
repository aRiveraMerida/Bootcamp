import React from "react";

import { Button } from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
  },
};
const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};

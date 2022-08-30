import React from 'react';
import { Button } from '../../ui/components/Button';
import { Meta, Story } from "@storybook/react";

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;


export const Template: Story = (args) => <Button {...args} />;


export const Default = Template.bind({});

Default.args = {
}
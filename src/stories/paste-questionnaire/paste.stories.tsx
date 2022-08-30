import React from 'react';
import { OrchestratorForStories as Orchestrator } from '../orchestrator';
import simpsons from './source.json';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Questionnaires-PasteYour/Paste',
  component: Orchestrator,
  argTypes: {
    activeGoNextForMissing: {
      table: { disable: false },
      control: 'boolean',
      defaultValue: true,
    },
    activeControls: {
      control: 'boolean',
      defaultValue: true,
    },
    source: {
      table: { disable: false },
      control: { type: 'object' },
      defaultValue: simpsons,
    }
  }
} as ComponentMeta<typeof Orchestrator>;


export const Template: ComponentStory<typeof Orchestrator> = (args) => <Orchestrator {...args} />;


export const Default = Template.bind({});

Default.args = {
  source: simpsons,
}
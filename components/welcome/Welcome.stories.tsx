import { ComponentMeta, ComponentStory } from '@storybook/react';
import Welcome, { IWelcome } from './Welcome';
import { mockWelcomeProps } from './Welcome.mocks';

export default {
  title: 'welcome/Welcome',
  component: Welcome,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Welcome>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Welcome> = (args) => (
  <Welcome {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockWelcomeProps.base,
} as IWelcome;

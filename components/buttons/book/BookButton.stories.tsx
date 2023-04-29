import { ComponentMeta, ComponentStory } from '@storybook/react';
import BookButton, { IBookButton } from './BookButton';
import { mockBookButtonProps } from './BookButton.mocks';

export default {
  title: 'buttons/BookButton',
  component: BookButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BookButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BookButton> = (args) => (
  <BookButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBookButtonProps.base,
} as IBookButton;

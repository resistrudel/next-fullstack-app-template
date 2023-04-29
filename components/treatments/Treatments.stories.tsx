import { ComponentMeta, ComponentStory } from '@storybook/react';
import Treatments, { ITreatments } from './Treatments';
import { mockTreatmentsProps } from './Treatments.mocks';

export default {
  title: 'Treatments/Treatments',
  component: Treatments,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Treatments>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Treatments> = (args) => (
  <Treatments {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTreatmentsProps.base,
} as ITreatments;

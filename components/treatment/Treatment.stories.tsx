import { ComponentMeta, ComponentStory } from '@storybook/react';
import Treatment, { ITreatment } from './Treatment';
import { mockTreatmentProps } from './Treatment.mocks';

export default {
  title: 'treatment/Treatment',
  component: Treatment,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Treatment>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Treatment> = (args) => (
  <Treatment {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTreatmentProps.base,
} as ITreatment;

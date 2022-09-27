import React from 'react';
import Card from '../storybook-components/Card';

export default {
  title: 'Components/Card',
  component: Card
};

export const Default = (args) => (
  <Card
    title="Highly experienced Team"
    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu ."
    {...args}
  />
);

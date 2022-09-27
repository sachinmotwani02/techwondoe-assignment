import React from 'react';
import Card from '../storybook-components/Card';

export interface ICheckpoints {
  careers: ICheckpoint[];
}

export interface ICheckpoint {
  data: {
    fields: {
      head: string;
      para: string;
    };
  };
}

export const CheckPoints = ({ data }: ICheckpoint) => {
  const { head, para } = data.fields;
  return <Card title={head} para={para} />;
};

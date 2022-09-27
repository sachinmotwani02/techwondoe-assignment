import React from 'react';
import Button from '../storybook-components/Button';

export interface ICareerData {
  careers: ICareer[];
}

export interface ICareer {
  data: {
    fields: {
      head: string;
      para: string;
    };
  };
}

export const Career = ({ data }: ICareer) => {
  const { head, para } = data.fields;
  return (
    <div className="container px-5 py-24 mx-auto flex flex-col items-center justify-center">
      <h1 className="md:text-3xl text-2xl font-semibold title-font text-center text-white mb-5">
        {head}
      </h1>
      <p className="text-white font-regular text-md mb-8  md:w-2/5 w-full text-center">
        {para}
      </p>
      <Button variant="secondary">Get in touch</Button>
    </div>
  );
};

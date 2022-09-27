import React from 'react';
import Button from '../storybook-components/Button';

export interface ITeamData {
  team: ITeam[];
}

export interface ITeam {
  tdata: {
    fields: {
      teamSubhead: string;
      teamHead: string;
      teamPara: string;
      teamImage: IImage;
    };
  };
}

interface IImage {
  fields: {
    file: {
      url: string;
    };
  };
}

export const Team = ({ tdata }: ITeam) => {
  const { teamSubhead, teamHead, teamPara, teamImage } = tdata.fields;
  return (
    <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row items-center md:justify-center justify-start">
      <img
        alt="Team Image"
        className="object-cover object-center"
        src={teamImage.fields.file.url}
      />
      <div className="flex md:w-2/5 lg:pl-14 md:pl-10 flex flex-col items-start md:text-left">
        <h2 className="md:text-md text-sm font-semibold title-font md:mt-0 mt-3 text-primary tracking-widest">
          {teamSubhead}
        </h2>
        <h1 className="text-gray-900 md:text-3xl text-2xl title-font mt-3 font-semibold mb-1">
          {teamHead}
        </h1>
        <p className="leading-relaxed md:text-md text-md mt-3 mb-8">
          {teamPara}
        </p>
        <Button variant="primary">Learn more</Button>
      </div>
    </div>
  );
};

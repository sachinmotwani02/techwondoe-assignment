import React from 'react';

export interface ICards {
  cards: ICard[];
}

export interface ICard {
  card: {
    fields: {
      icon: IImage;
      head: string;
      paragraph: string;
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

export const Card = ({ card }: ICard) => {
  const { icon, head, paragraph } = card.fields;
  return (
    <div className="px-4 py-8  md:w-1/3 bg-white m-7">
      <div className="h-full overflow-hidden">
        <img
          className="pl-6"
          src={icon.fields.file.url}
          alt="candidates icon"
        />
        <div className="p-6">
          <h1 className="title-font text-xl font-bold text-gray-900 mb-4">
            {head}
          </h1>
          <p className="leading-relaxed text-md mb-8">{paragraph}</p>
          <div className="flex items-center flex-wrap ">
            <a className="text-primary hover:text-gray-500 hover:cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
